import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import logoImg from '../../assets/logo.svg';

import './styles.css';

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    const history = useHistory();

    async function handleRegister(event) {
        event.preventDefault();

        const data = {
            name,
            email,
            whatsapp,
            city,
            uf
        };

        try {
            const response = await api.post('/ongs', data);

            alert(`Seu ID de acesso: ${response.data.id}`);

            history.push('/');
        } catch (err) {
            console.log(err);
            alert(`Erro no cadastro. Tente novamente!`);
        }
    }

    return(
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The hero"></img>
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02041"></FiArrowLeft>
                        Voltar para o Logon
                    </Link>
                </section>

                <form onSubmit={handleRegister}>
                    <input
                        type="text"
                        placeholder="Nome da ONG"
                        value={name}
                        onChange={evt => setName(evt.target.value)}
                    />

                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={evt => setEmail(evt.target.value)}    
                    />

                    <input
                        type="text"
                        placeholder="Whatsapp"
                        value={whatsapp}
                        onChange={evt => setWhatsapp(evt.target.value)}
                    />

                    <div className="input-group">
                        <input
                            type="text"
                            placeholder="Cidade"
                            value={city}
                            onChange={evt => setCity(evt.target.value)}
                        />

                        <input
                            type="text"
                            placeholder="UF"
                            style={{ width: 80 }}
                            value={uf}
                            onChange={evt => setUf(evt.target.value)}
                        />
                    </div>

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}
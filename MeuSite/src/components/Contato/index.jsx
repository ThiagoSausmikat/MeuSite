import React, { useState } from 'react';
import styles from "./styles.module.css";
import { FaGithub } from "react-icons/fa";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { FaLinkedinIn } from "react-icons/fa";

const ContatoSection = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    // Função para lidar com a mudança de valor dos campos
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Função para lidar com o envio do formulário
    const handleSubmit = (e) => {
        e.preventDefault();
        // Aqui você pode fazer o que quiser com os dados, como enviá-los para um servidor
        console.log('Form data submitted:', formData);
        // Limpar o formulário após o envio, se necessário
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    return (
        <section className={styles.conteiner} id='sobre'>
                <h1 className={styles.titulo}>Contato</h1>

            <div className={styles.conteinerContatos}>

                <div className={styles.form}>
                    <form onSubmit={handleSubmit} className={styles.contactForm}>
                        <div className={styles.formGroup}>
                            <label htmlFor="name">Nome</label>
                            <input
                                placeholder='Digite o seu nome'
                                type="text"
                                id="name"
                                name="name"
                                
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="email">Email</label>
                            <input
                                placeholder='Digite o seu email'
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="message">Mensagem</label>
                            <textarea
                                placeholder='Digite a sua mensagem'
                                id="message"
                                name="message"
                                rows="5"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>

                        <button type="submit">Enviar</button>
                    </form>
                </div>

                <div className={styles.ConteinerContatos}>
                <div className={styles.contatos}>
                <div className={styles.circulo}>
                <a className={styles.icon1} href="https://github.com/ThiagoSausmikat" target="_blank" rel="noopener noreferrer">
                <FaGithub className={styles.icon1} />
                </a>
                </div>
                <div className={styles.circulo}>
                <a className={styles.icon2} href="https://www.linkedin.com/in/thiago-moura93/" target="_blank" rel="noopener noreferrer">
                 <FaLinkedinIn className={styles.icon2}/>
                 </a>
                </div>
                </div>
                </div>

            </div>

        </section>
    );
};

export default ContatoSection;
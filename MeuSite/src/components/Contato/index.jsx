import React, { useState } from 'react';
import styles from "./styles.module.css";
import Swal from 'sweetalert2'
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const ContatoSection = () => {
    
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "89e7fbe1-af8c-449c-9aa9-9fdfb7a0480e");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        Swal.fire({
            title: "Muito bem!",
            text: "Email enviado com sucesso",
            icon: "success",
            customClass: {
                container: 'my-swal-container',
                title: 'my-swal-title',
                content: 'my-swal-content'
            },
            width: 'auto', // Ajuste a largura para a porcentagem ou valor fixo, como '400px'
            padding: '1em' // Ajuste o padding se necessário
        });
  

        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

    return (
        <section className={styles.conteiner} id='contato'>
                <h1 className={styles.titulo}>CONTATO</h1>

            <div className={styles.conteinerContatos}>

                <div className={styles.form}>
                    <form onSubmit={onSubmit} className={styles.contactForm}>
                        <div className={styles.formGroup}>
                            <label className={styles.labelText}>Nome</label>
                            <input  type="text" id="nome" name="nome" placeholder='Digite o seu nome' required />
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.labelText}>Email</label>
                            <input  type="email" id="email" name="email" placeholder='Digite o seu email' required />
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.labelText}>Mensagem</label>
                            <textarea  id="mensagem" name="mensagem" rows="5" placeholder='Digite a sua mensagem' required />
                        </div>

                        <button className={styles.buttonSubmit}type="submit">Enviar</button>
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
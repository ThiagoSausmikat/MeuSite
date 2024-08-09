import React from 'react';
import styles from "./styles.module.css";
import Estadosunidos from "../../assets/Estadosunidos.png"

const CursosSection = () => {
  return (
    <section className={styles.conteiner}  id='skills'>
        
        <h1 className={styles.titulo}>FORMAÇÃO</h1>
      

      <div className={styles.formacaoCards}>

      
          <div className={styles.cursosCards}>
          <h1 className={styles.subtitulo2}>Cursos</h1>
          <div className={styles.cardsContent1}>
                  <ul className={styles.cardsContent2}>
                    <li><h3>SERRATEC - Parque Tecnológico da Região Serrana RJ</h3></li>
                    <li><h4>Duração: março de 2024 até julho de 2024 · 5 meses</h4></li>
                    <li><p>Competências: SQL · PostgreSQL · HTML · CSS · JavaScript · Java · Spring Boot · React · React Native · Trabalho em equipe · Comunicação</p></li>
                  </ul>
          </div>

          <div className={styles.cardsContent1}>
                  <ul className={styles.cardsContent2}>
                    <li><h3>SERRATEC - Parque Tecnológico da Região Serrana RJ</h3></li>
                    <li><h4>Duração: março de 2024 até julho de 2024 · 5 meses</h4></li>
                    <li><p>Competências: SQL · PostgreSQL · HTML · CSS · JavaScript · Java · Spring Boot · React · React Native · Trabalho em equipe · Comunicação</p></li>
                  </ul>
          </div>
          </div>

          
          <div className={styles.idiomasCards}>
          <h1 className={styles.subtitulo2}>Idiomas</h1>
          <div className={styles.cardsContent1}>
                  <ul className={styles.cardsContent2}>
                    <li><h3>Inglês</h3></li>
                    <img class={styles.img} src={Estadosunidos} alt="logotipo"></img>
                    <li><h4>Nivel: Básico</h4></li>
                  </ul>
          </div>
          </div>


          </div>
        
    </section>
  );
};

export default CursosSection;
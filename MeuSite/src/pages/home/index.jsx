import React from "react";
import styles from "./styles.module.css";
import Navbar from "../../components/NavBar/index.jsx";
import foto from "../../assets/foto.png"
import { Parallax } from 'react-parallax'
import Paralax from '../../assets/paralax.jpg'
import SkillsSection from "../../components/Skills/index.jsx";
import ContatoSection from "../../components/Contato/index.jsx";



const Home = () => {
  
  return (
    <div className={styles.body} id='inicio'>
      
    <Navbar />
    
    <div id='home'>
    <Parallax strength={300} blur={{min: -5, max: 5}} bgImage={Paralax}  >
      <div className={styles.content}>
      <div className={styles.textContent}>Seja bem vindo ao meu Site</div>
      </div>
    </Parallax>
    </div>

      <section className={styles.conteiner}  id='sobre'>
        
        <div className={styles.conteinercontent}>
        <img className={styles.foto} src={foto} alt="Logo" />
        <div>
        <h1 className={styles.titulo}>Quem sou eu?</h1>
        <p>Sou de Teresópolis, tenho 30 anos, sou casado e pai de uma encantadora menina. Apaixonado por tecnologia, estou em busca de oportunidades na área de desenvolvimento de software. Possuo sólida experiência em Java, HTML, CSS, JavaScript e SQL. Encontro na inovação e na evolução digital minha motivação constante para aprender e crescer profissionalmente. Estou preparado para aplicar minhas habilidades técnicas em projetos desafiadores que impulsionem o progresso tecnológico e contribuam significativamente para o sucesso da equipe e da empresa.</p>
        </div>
        </div>
      </section>

    <SkillsSection />

    <ContatoSection />



    </div>
  );
};

export default Home;
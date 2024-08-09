import React from 'react';
import styles from "./styles.module.css";
import Navbar from "../../components/NavBar/index.jsx";
import foto from "../../assets/foto.png"
import SkillsSection from "../../components/Skills/index.jsx";
import ContatoSection from "../../components/Contato/index.jsx";
import ScrollingText from "../../components/ScrollingText/index.jsx";
import Scrolling from "../../components/Scrolling/index.jsx";
import BemVindoSection from '../../components/BemVindo/index.jsx';
import ParallaxSection from '../../components/Paralax/index.jsx';
import CursosSection from '../../components/Cursos/index.jsx';




const Home = () => {
  
  return (
    <div className={styles.body} id='inicio'>
      
    <Navbar />
    
    <BemVindoSection />

      <section className={styles.conteiner}  id='sobre'>
        <div className={styles.conteinercontent}>
        <img className={styles.foto} src={foto} alt="Logo" />
        <div>
        <h1 className={styles.titulo}>Quem sou eu?</h1>
        <p className={styles.paragraph}>Sou de Teresópolis, tenho 30 anos, sou casado e pai de uma encantadora menina. Apaixonado por tecnologia, estou em busca de oportunidades na área de desenvolvimento de software. Possuo sólida experiência em Java, HTML, CSS, JavaScript e SQL. Encontro na inovação e na evolução digital minha motivação constante para aprender e crescer profissionalmente. Estou preparado para aplicar minhas habilidades técnicas em projetos desafiadores que impulsionem o progresso tecnológico e contribuam significativamente para o sucesso da equipe e da empresa.</p>
        </div>
        </div>
      </section>

    <ParallaxSection />
      
    <SkillsSection />

    <CursosSection />

    <ContatoSection />

    <ScrollingText />

    </div>
  );
};

export default Home;
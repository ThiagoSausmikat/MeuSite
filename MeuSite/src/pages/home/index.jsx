import React from 'react';
import styles from "./styles.module.css";
import Navbar from "../../components/NavBar/index.jsx";
import foto from "../../assets/foto.png"
import SkillsSection from "../../components/Skills/index.jsx";
import ContatoSection from "../../components/Contato/index.jsx";

import BemVindoSection from '../../components/BemVindo/index.jsx';
import ParallaxSection from '../../components/Paralax/index.jsx';
import FormacaoSection from '../../components/Formacao/index.jsx';



const Home = () => {
  
    // URL para o arquivo PDF (deve estar na pasta public)
    const pdfUrl = '../../../public/Curriculo.pdf';


  return (
    <div className={styles.body} id='inicio'>
      
    <Navbar />
    
    <BemVindoSection />

      <section className={styles.conteiner}  id='sobre'>
        <div className={styles.conteinercontent}>
        <div>
        <img className={styles.foto} src={foto} alt="Logo" />
        <div><a href={pdfUrl} download="Currículo.pdf"><button className={styles.button}>Baixar Currículo</button></a></div>
        </div>
        <div>
        <h1 className={styles.titulo}>Quem sou eu?</h1>
        <p className={styles.paragraph}>
          Meu nome é Thiago Moura, tenho 30 anos, moro na cidade de Teresópolis no estado do Rio de Janeiro, sou casado e pai de uma encantadora menina.<br/>
          Desde de pequeno sempre tive uma grande paixão pela tecnologia. Comecei na área de design e ao longo dos anos busquei me aprofundar na área de desenvolvimento de software. Possuo experiência em CorelDraw, Photoshop, Illustrator, Java, HTML, CSS, JavaScript, React e SQL.<br/>
          Encontro na inovação e na evolução digital minha motivação constante para aprender e crescer profissionalmente. Estou preparado para aplicar minhas habilidades técnicas em projetos desafiadores que impulsionem o progresso tecnológico e contribuam significativamente para o sucesso da equipe e da empresa.
        </p>
        </div>
        </div>
      </section>

    <ParallaxSection />
      
    <SkillsSection />

    <FormacaoSection />

    <ContatoSection />

    </div>
  );
};

export default Home;
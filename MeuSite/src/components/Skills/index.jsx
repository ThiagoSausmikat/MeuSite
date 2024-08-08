import React, { useRef, useEffect } from 'react';
import styles from "./styles.module.css";


const SkillsSection = () => {
  
  const textRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      textRef.current.style.transform = `translateX(${scrollTop * 0.1}px)`;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    
<section className={styles.conteiner}  id='skills'>
        
<h1 className={styles.titulo}>SKILLS</h1>

<div className={styles.ConteinerSkills1}>
<div className={styles.skills1}>
  <h1 className={styles.skillsTitulo1}>Básico</h1>
  <div className={styles.skillsCirculosEscuro1}></div>
  <div className={styles.skillsCirculosEscuro1}></div>
  <div className={styles.skillsCirculosEscuro1}></div>
  <div className={styles.skillsCirculosClaro1}></div>
  <div className={styles.skillsCirculosClaro1}></div>
</div>
<div className={styles.skills1}>
  <h1 className={styles.skillsTitulo1}>Intermediário</h1>
  <div className={styles.skillsCirculosEscuro1}></div>
  <div className={styles.skillsCirculosEscuro1}></div>
  <div className={styles.skillsCirculosEscuro1}></div>
  <div className={styles.skillsCirculosEscuro1}></div>
  <div className={styles.skillsCirculosClaro1}></div>
</div>
<div className={styles.skills1}>
  <h1 className={styles.skillsTitulo1}>Avançado</h1>
  <div className={styles.skillsCirculosEscuro1}></div>
  <div className={styles.skillsCirculosEscuro1}></div>
  <div className={styles.skillsCirculosEscuro1}></div>
  <div className={styles.skillsCirculosEscuro1}></div>
  <div className={styles.skillsCirculosEscuro1}></div>
</div>
</div>

<div className={styles.PageContainer}>
<div className={styles.ConteinerSkills2}>
<div className={styles.skills2}>
  <h1 className={styles.skillsTitulo2}>MS Office</h1>
  <div className={styles.skillsCirculos}>
  <div className={styles.skillsCirculosEscuro2}></div>
  <div className={styles.skillsCirculosEscuro2}></div>
  <div className={styles.skillsCirculosEscuro2}></div>
  <div className={styles.skillsCirculosClaro2}></div>
  <div className={styles.skillsCirculosClaro2}></div>
  </div>
</div>
<div className={styles.skills2}>
  <h1 className={styles.skillsTitulo2}>Photoshop</h1>
  <div className={styles.skillsCirculos}>
  <div className={styles.skillsCirculosEscuro2}></div>
  <div className={styles.skillsCirculosEscuro2}></div>
  <div className={styles.skillsCirculosEscuro2}></div>
  <div className={styles.skillsCirculosEscuro2}></div>
  <div className={styles.skillsCirculosEscuro2}></div>
  </div>
</div>
<div className={styles.skills2}>
  <h1 className={styles.skillsTitulo2}>Corel Draw</h1>
  <div className={styles.skillsCirculos}>
  <div className={styles.skillsCirculosEscuro2}></div>
  <div className={styles.skillsCirculosEscuro2}></div>
  <div className={styles.skillsCirculosEscuro2}></div>
  <div className={styles.skillsCirculosEscuro2}></div>
  <div className={styles.skillsCirculosEscuro2}></div>
  </div>
</div>
<div className={styles.skills2}>
  <h1 className={styles.skillsTitulo2}>Java</h1>
  <div className={styles.skillsCirculos}>
  <div className={styles.skillsCirculosEscuro2}></div>
  <div className={styles.skillsCirculosEscuro2}></div>
  <div className={styles.skillsCirculosEscuro2}></div>
  <div className={styles.skillsCirculosClaro2}></div>
  <div className={styles.skillsCirculosClaro2}></div>
  </div>
</div>
<div className={styles.skills2}>
  <h1 className={styles.skillsTitulo2}>HTML</h1>
  <div className={styles.skillsCirculos}>
  <div className={styles.skillsCirculosEscuro2}></div>
  <div className={styles.skillsCirculosEscuro2}></div>
  <div className={styles.skillsCirculosEscuro2}></div>
  <div className={styles.skillsCirculosEscuro2}></div>
  <div className={styles.skillsCirculosClaro2}></div>
  </div>
</div>
<div className={styles.skills2}>
  <h1 className={styles.skillsTitulo2}>CSS</h1>
  <div className={styles.skillsCirculos}>
  <div className={styles.skillsCirculosEscuro2}></div>
  <div className={styles.skillsCirculosEscuro2}></div>
  <div className={styles.skillsCirculosEscuro2}></div>
  <div className={styles.skillsCirculosEscuro2}></div>
  <div className={styles.skillsCirculosClaro2}></div>
  </div>
</div>
</div>
</div>

<div className={styles.scrollingContainer}>
      <h1 ref={textRef}>Thiago Moura / Fullstack / Thiago Moura / Fullstack / Thiago Moura / Fullstack / Thiago Moura / Fullstack / Thiago Moura / Fullstack / Thiago Moura / Fullstack / Thiago Moura / Fullstack</h1>
    </div>
</section>

  );
};

export default SkillsSection;
import React, { useRef, useEffect } from 'react';
import styles from "./styles.module.css";
import paralax from "../../assets/paralax.jpg"
import Lottie from 'lottie-react';
import Scroll from "../../assets/scroll.json"

const BemVindoSection = () => {
   
    return (
    
    <section className={styles.conteiner} id='sobre'>
      <div className={styles.textContent}>Seja bem vindo ao meu Site</div>
      <div className={styles.lottieContainer}>
      <Lottie animationData={Scroll} loop={true} className={styles.lottie} />
      </div>
    </section>

  );
};

export default BemVindoSection;
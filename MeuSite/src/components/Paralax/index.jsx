import React from 'react';
import { Parallax } from 'react-parallax';
import styles from "./styles.module.css";
import paralax from "../../assets/paralax.jpg"

const ParallaxSection = () => {
  return (
    <div className={styles.imagemFixa} id='home' >
      <img src={paralax} alt="Imagem Fixa" />
    </div>
  );
};

export default ParallaxSection;
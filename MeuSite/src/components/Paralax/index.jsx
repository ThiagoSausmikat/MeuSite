import React from 'react';
import { Parallax } from 'react-parallax';
import styles from "./styles.module.css";
import Paralax from '../../assets/paralax.jpg'

const ParallaxSection = () => {
  return (
    <div id='home' >
    <Parallax strength={300} blur={{min: -5, max: 5}} bgImage={Paralax}  >
      <div className={styles.content}>
      </div>
    </Parallax>
    </div>
  );
};

export default ParallaxSection;
import React from 'react';
import { Parallax } from 'react-parallax';
import styles from "./styles.module.css";
import Programming from '../../assets/programming.png'

const ParallaxSection = () => {
  return (
    <div id='home' >
    <Parallax strength={300} blur={{min: -3, max: 3}} bgImage={Programming}  >
      <div className={styles.content}>
      </div>
    </Parallax>
    </div>
  );
};

export default ParallaxSection;
import React, { useState, useEffect } from 'react';
import styles from "./styles.module.css";

const ScrollingText = () => {

  return (
    <div className={styles.scrollingWrapper}>
    <div className={styles.scrollingText}>
      Este é um texto rolante horizontalmente. Este é um texto rolante horizontalmente.
    </div>
  </div>
  );
};

export default ScrollingText;

import React, { useState } from 'react';
import { Link } from 'react-scroll';
import styles from "./styles.module.css";

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMenu = () => setClick(false);




    return (
        
            <nav className={styles.navbar}>
                
                
                <div  className={styles.nome}>
                <Link to="inicio" spy={true} smooth={true} offset={0} duration={800} onClick={closeMenu} >THIAGO MOURA</Link>
                
                </div>
                

                
                <div className={styles.hamburger} onClick={handleClick}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>

                
                <ul className={`${styles.navMenu} ${click ? styles.active : ''}`}>
                    <li className={styles.navItem}>
                        <Link to="home" spy={true} smooth={true} offset={0} duration={800} onClick={closeMenu}>Home</Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link to="sobre" spy={true} smooth={true} offset={0} duration={800} onClick={closeMenu}>Sobre</Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link to="skills" spy={true} smooth={true} offset={0} duration={800} onClick={closeMenu}>Skills</Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link to="contato" spy={true} smooth={true} offset={0} duration={800} onClick={closeMenu}>Contato</Link>
                    </li>
                </ul>
            </nav>
        
    );
};

export default Navbar;

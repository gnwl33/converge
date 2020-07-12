import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';
import s from './Footer.module.css';
import facebook from '../img/facebook.svg';
import twitter from '../img/twitter.svg';
import linkedin from '../img/linkedin.svg';

const Footer = (props) => {
  return (
    <div className={`${styles.navbar} dark`}>
      <div className={s.left}>
        {['About', 'Policy', 'Contact'].map((word) => (
          <Link className="text-24">{word}</Link>
        ))}
      </div>
      <div className={`${s.right} to-right`}>
        <img src={facebook} alt="facebook icon" />
        <img src={twitter} alt="twitter icon" />
        <img src={linkedin} alt="linkedin icon" />
      </div>
    </div>
  );
};

export default Footer;

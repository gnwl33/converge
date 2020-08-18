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
          <Link to="/" className="text-24" key={word}>
            {word}
          </Link>
        ))}
      </div>
      <div className={s.right}>
        {[
          { src: facebook, alt: 'facebook' },
          { src: twitter, alt: 'twitter' },
          { src: linkedin, alt: 'linkedin' },
        ].map((icon) => (
          <img key={icon.alt} src={icon.src} alt={`${icon.alt} icon`} />
        ))}
      </div>
    </div>
  );
};

export default Footer;

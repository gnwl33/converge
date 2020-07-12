import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '@material-ui/core/styles';
import Button from './Button';
import styles from './NavBar.module.css';
import s from './Header.module.css';
import logoIcon from '../img/logo.svg';

const Header = (p) => {
  let path = useLocation().pathname;
  const [scroll, setScroll] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (path !== '/') {
      return;
    }

    const onScroll = () => {
      // console.log(value);
      // setValue(value + 1);
      const isTop = window.scrollY < 201;
      //debounce/throttle? prob not
      if (isTop !== scroll) {
        setScroll(isTop);
      }
    };

    //closure?? no, opposite? captures snapshot of state
    document.addEventListener('scroll', onScroll, { passive: true });
    return () => document.removeEventListener('scroll', onScroll);
  }, [scroll, path]);

  const theme = useTheme();

  let img;
  let color = {};
  let text = 'text-24';
  let button = 'light';
  let header = s.header;
  if (path === '/' && scroll) {
    img = 'box-shadow';
    text += ' text-shadow';
    button += ' box-shadow';
  } else {
    color = { color: theme.palette.secondary.main, background: 'white' };
    button += ` ${s.border}`;
    header += ' lite-shadow';
  }

  return (
    <div className={s.wrapper}>
      <div className={`${header} ${styles.navbar}`} style={color}>
        <Link to="/" className={s.logo}>
          <img className={img} src={logoIcon} alt="logo icon" />
          <div className={`${text} ${s.converge} heading-32`} style={color}>
            CONVERGE
          </div>
        </Link>
        <div className={s.rightHeader}>
          <Link to="/" className={text} style={color}>
            Product
          </Link>
          <Link to="/" className={text} style={color}>
            Pricing
          </Link>
          <Button
            to="/"
            className={button}
            size="24px"
            width="140px"
            height="50px"
          >
            Log In
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;

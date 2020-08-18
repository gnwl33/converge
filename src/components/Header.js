import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Avatar } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import Button from './Button';
import styles from './NavBar.module.css';
import s from './Header.module.css';
import logoIcon from '../img/logo.svg';

const Header = (p) => {
  let path = useLocation().pathname;
  const [scroll, setScroll] = useState(true);

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
    img = 'dark-shadow';
    text += ' text-shadow';
    button += ' dark-shadow no-border';
  } else {
    color = { color: theme.palette.primary.main, background: 'white' };
    header += ` ${s.shadow}`;
  }
  const isPreLogin = path === '/' || path === '/auth';
  let rHeaderWidth = {};
  if (!isPreLogin) rHeaderWidth = { width: '379px' };

  return (
    <div className={s.wrapper}>
      <div className={`${header} ${styles.navbar}`} style={color}>
        <Link to="/" className={s.logo}>
          <img className={img} src={logoIcon} alt="logo icon" />
          <div className={`${text} ${s.converge} heading-32`} style={color}>
            CONVERGE
          </div>
        </Link>
        <div className={s.rightHeader} style={rHeaderWidth}>
          <Link to="/" className={text} style={color}>
            {isPreLogin ? 'Product' : 'Bookings'}
          </Link>
          <Link to="/" className={text} style={color}>
            {isPreLogin ? 'Pricing' : 'Settings'}
          </Link>
          {isPreLogin ? (
            <Button
              to="/"
              className={button}
              size="24px"
              width="140px"
              height="50px"
            >
              Log In
            </Button>
          ) : (
            <Link to="/" style={{ textDecoration: 'none' }}>
              <Avatar className={s.avatar}>JS</Avatar>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;

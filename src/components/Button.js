import React from 'react';
import { Button as B } from '@material-ui/core';
import { Link } from 'react-router-dom';
import s from './Button.module.css';

const Button = (p) => {
  const style = {
    width: p.width,
    height: p.height,
    fontSize: p.size,
  };

  let cls = p.className;

  let classes = `${s.button} ${cls}`;
  if (cls.includes('light')) {
    classes += ` ${s.light}`;
    if (!cls.includes('no-border')) {
      classes += ` ${s.border}`;
    }
  } else {
    classes += ` ${s.dark}`;
  }

  return (
    <B
      component={Link}
      to={p.to}
      className={classes}
      startIcon={p.startIcon}
      style={style}
      onClick={p.onClick}
    >
      {p.children}
    </B>
  );
};

export default Button;

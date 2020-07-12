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

  let classes = `${s.button} ${p.className}`;
  if (p.className.includes('light')) {
    classes += ` ${s.light}`;
  } else {
    classes += ` ${s.dark}`;
  }

  return (
    <B component={Link} to={p.to} className={classes} style={style}>
      {p.children}
    </B>
  );
};

export default Button;

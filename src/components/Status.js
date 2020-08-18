import React from 'react';
import s from './Status.module.css';

const Status = (p) => {
  let cls = s.status;
  if (p.className) {
    cls += ` ${p.className}`;
  }

  if (p.className.includes('available')) {
    cls += ' grn';
  } else {
    cls += ' rd';
  }

  let style = {};
  if (p.padding) style = { padding: p.padding };
  if (p.margin) style = { ...style, marginRight: p.margin };
  if (p.radius) style = { ...style, borderRadius: p.radius };

  return (
    <div className={cls} style={style}>
      {p.children}
    </div>
  );
};

export default Status;

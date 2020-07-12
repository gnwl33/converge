import React from 'react';
import s from './Section.module.css';

const Section = (p) => {
  const style = {
    height: p.height,
  };

  return (
    <div className={`${s.section} ${p.className}`} style={style}>
      {p.children}
    </div>
  );
};

export default Section;

import React from 'react';
import Section from '../components/Section';
import s from './Home.module.css';

const TriSection = (p) => {
  return (
    <Section className={`${p.className} column`} height="490">
      <div className={`${s.title} ${p.className} heading-40`}>{p.title}</div>
      {p.satisfaction && <p className={s.trusted}>Trusted by</p>}
      <div className={s.trisection}>
        {p.contents &&
          p.contents.map((content) => {
            let text;
            text = p.satisfaction ? null : (
              <p className={s.pStyle}>{content.text}</p>
            );

            return (
              <div className="center flex-1">
                <div className="center column">
                  <img
                    src={content.src}
                    alt={content.alt}
                    style={content.style}
                  />
                  {text}
                </div>
              </div>
            );
          })}
      </div>
    </Section>
  );
};

export default TriSection;

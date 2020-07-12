import React from 'react';
import TriSection from './TriSection';
import google from '../img/googleLogo.svg';
import microsoft from '../img/microsoftLogo.svg';
import facebook from '../img/facebookLogo.svg';

const style = { marginBottom: '70px' };

const contents = [
  { src: google, alt: 'Google logo', style },
  { src: microsoft, alt: 'Microsoft logo', style },
  { src: facebook, alt: 'Facebook logo', style },
];

const Satisfaction = () => {
  return (
    <TriSection
      className="silver"
      title="Satisfaction Guaranteed"
      satisfaction
      contents={contents}
    />
  );
};

export default Satisfaction;

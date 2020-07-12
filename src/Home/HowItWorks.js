import React from 'react';
import TriSection from './TriSection';
import tune from '../img/tune.svg';
import clock from '../img/clock.svg';
import storage from '../img/storage.svg';

const contents = [
  { src: tune, alt: 'tune icon', text: 'Search by time, size, and more' },
  { src: clock, alt: 'clock icon', text: 'Track real-time room availability' },
  { src: storage, alt: 'storage icon', text: 'Save your search settings' },
];

const HowItWorks = () => {
  return (
    <TriSection className="dark" title="How It Works" contents={contents} />
  );
};

export default HowItWorks;

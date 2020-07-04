import React from 'react';
import Button from '../components/Button';

const TopCTA = () => {
  return (
    <div className="top-cta-wrapper">
      <div className="top-cta">
        <h1 className="heading-58 text-shadow">
          Booking a room has never been easier.
        </h1>
        <Button
          className="box-shadow"
          light
          width="334px"
          height="87px"
          size="35px"
        >
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default TopCTA;

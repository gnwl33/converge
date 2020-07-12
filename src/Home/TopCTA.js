import React from 'react';
import Button from '../components/Button';
import s from './Home.module.css';

const TopCTA = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.topCTA}>
        <div className={`${s.headline} heading-59 text-shadow`}>
          Booking a room has never been easier.
        </div>
        <Button
          to="/auth"
          className="light box-shadow"
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

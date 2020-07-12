import React from 'react';
import Button from '../components/Button';
import googleplay from '../img/googleplay.svg';
import appstore from '../img/appstore.svg';

const BottomCTA = () => {
  return (
    <div className="center column">
      <p className="text-28 blue" style={{ marginBottom: '25px' }}>
        Need to book a room?
      </p>
      <Button
        className="dark"
        to="/auth"
        width="334px"
        height="87px"
        size="35px"
      >
        Get Started
      </Button>
      <div className="space" style={{ width: '420px', margin: '50px' }}>
        <img src={googleplay} alt="google play button" />
        <img src={appstore} alt="app store button" />
      </div>
    </div>
  );
};

export default BottomCTA;

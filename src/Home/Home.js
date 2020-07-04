import React from 'react';
import Header from '../components/Header';
import TopCTA from './TopCTA';
import './Home.css';

const Home = () => {
  return (
    <div>
      <Header />
      <TopCTA />
      <div className="how-it-works"></div>
      <div className="satisfaction"></div>
      <div className="footer"></div>
    </div>
  );
};

export default Home;

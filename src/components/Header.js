import React from 'react';
import NavBar from './NavBar';
import Button from './Button';
import logo from '../assets/logo.svg';

const Header = (props) => {
  return (
    <NavBar>
      <div className="logo">
        <img className="box-shadow" src={logo} alt="Logo" />
        <p className="heading-32 text-shadow">CONVERGE</p>
      </div>
      <div className="right-header">
        <p className="heading-24 text-shadow">Product</p>
        <p className="heading-24 text-shadow">Pricing</p>
        <Button
          className="box-shadow"
          light
          size="24px"
          width="140px"
          height="50px"
        >
          Log In
        </Button>
      </div>
    </NavBar>
  );
};

export default Header;

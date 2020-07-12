import React from 'react';
import { TextField, Divider } from '@material-ui/core';
import Button from '../components/Button';
import s from './Auth.module.css';

const Auth = () => {
  return (
    <div className={s.bg}>
      <div className={`${s.main} box-shadow rounded`}>
        <form
          className="center"
          style={{ flex: 1, height: '90%', margin: '30px', flexWrap: 'wrap' }}
          action=""
        >
          <div
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <TextField
              label="First Name"
              color="secondary"
              variant="outlined"
              style={{ width: '47%' }}
            />
            <TextField
              label="Last Name"
              color="secondary"
              variant="outlined"
              style={{ width: '47%' }}
            />
          </div>
          <TextField
            label="Email"
            color="secondary"
            variant="outlined"
            style={{ width: '100%' }}
          />
          <TextField
            label="Password"
            color="secondary"
            variant="outlined"
            style={{ width: '100%' }}
          />
          <Button
            to="/search"
            className="dark"
            size="24px"
            width="100%"
            height="55px"
          >
            Create Account
          </Button>
          <div style={{ fontSize: '18px', color: 'black' }}>OR </div>
          <Button className="dark" size="24px" width="100%" height="55px">
            Create Account
          </Button>
          <Button className="dark" size="24px" width="100%" height="55px">
            Create Account
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Auth;

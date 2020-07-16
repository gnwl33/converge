import React, { useState } from 'react';
import {
  TextField,
  FormControl,
  OutlinedInput,
  InputLabel,
  InputAdornment,
  IconButton,
  Divider,
} from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { ReactComponent as Google } from '../img/googleIcon.svg';
import { ReactComponent as Facebook } from '../img/facebookIcon.svg';
import Button from '../components/Button';
import s from './Auth.module.css';

const Auth = () => {
  const [password, setPassword] = useState('');
  const [showPW, setShowPW] = useState(true);

  const handleChange = (event) => {
    setPassword(event.target.value);
  };

  const handleClickShowPW = () => {
    setShowPW(!showPW);
  };

  const handleMouseDownPW = (event) => {
    event.preventDefault();
  };

  return (
    <div className={s.bg}>
      <div className={s.main}>
        <form className={s.form} action="">
          <div className={s.row}>
            <TextField
              className={s.name}
              label="First Name"
              color="secondary"
              variant="outlined"
            />
            <TextField
              className={s.name}
              label="Last Name"
              color="secondary"
              variant="outlined"
            />
          </div>
          <TextField
            className={s.input}
            label="Email"
            color="secondary"
            variant="outlined"
          />
          <FormControl className={s.input} color="secondary" variant="outlined">
            <InputLabel className={s.label} htmlFor="password">
              Password
            </InputLabel>
            <OutlinedInput
              id="password"
              type={showPW ? 'password' : 'text'}
              value={password}
              onChange={handleChange}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPW}
                    onMouseDown={handleMouseDownPW}
                    edge="end"
                  >
                    {showPW ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <Button
            to="/search"
            className={s.button}
            size="24px"
            width="100%"
            height="55px"
          >
            Create Account
          </Button>
          <div className={s.break}>
            <Divider className={s.divider} />
            <div className={s.or}>OR </div>
            <Divider className={s.divider} />
          </div>
          <Button
            className="light"
            size="18px"
            width="100%"
            height="55px"
            startIcon={<Google />}
          >
            <p className={s.continue}>Continue with Google</p>
          </Button>
          <Button
            className="light"
            size="18px"
            width="100%"
            height="55px"
            startIcon={<Facebook />}
          >
            <p className={s.continue}>Continue with Facebook</p>
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Auth;

import React from 'react';
import { Modal, IconButton } from '@material-ui/core';
import { Close, CheckCircleOutline } from '@material-ui/icons';
import Button from '../components/Button';
import s from './Confirm.module.css';

const Confirm = (p) => {
  return (
    <Modal open={p.open} onClose={p.close}>
      <div className={s.modal}>
        <IconButton className={s.close} onClick={p.close}>
          <Close style={{ fontSize: '44px' }} />
        </IconButton>
        <div className={s.success}>Successfully Booked</div>
        <div className={s.email}>Check your email for confirmation.</div>
        <CheckCircleOutline className={s.check} />
        <Button button className="dark" size="24px" width="252px" height="55px">
          View Bookings
        </Button>
      </div>
    </Modal>
  );
};

export default Confirm;

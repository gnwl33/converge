import React from 'react';
import { Modal } from '@material-ui/core';
import { Close, CheckCircleOutline } from '@material-ui/icons';
import Button from '../components/Button';
import s from './Confirm.module.css';

const Confirm = (p) => {
  return (
    <Modal open={p.open} onClose={p.close}>
      <div className={s.modal}>
        <Close className={s.close} />
        <div className={s.success}>Successfully Booked</div>
        <div className={s.email}>Check your email for confirmation.</div>
        <CheckCircleOutline className={s.check} />
        <Button
          to="/bookings"
          className="dark"
          size="24px"
          width="252px"
          height="55px"
        >
          View Bookings
        </Button>
      </div>
    </Modal>
  );
};

export default Confirm;

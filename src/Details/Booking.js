import React, { useState } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { makeStyles } from '@material-ui/core/styles';
import Button from '../components/Button';
import s from './Details.module.css';
import Confirm from '../Confirm/Confirm';

const useStyles = makeStyles({
  picker: {
    '& .MuiOutlinedInput-adornedEnd': {
      paddingRight: '2px',
    },
  },
});

const Booking = (p) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();

  return (
    <div className="center column">
      <div
        className="text-28 bold"
        style={{ color: '#333', marginBottom: '7px' }}
      >
        Booking Details
      </div>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          className={`${s.long} ${classes.picker}`}
          style={{ width: '530px' }}
          color="secondary"
          inputVariant="outlined"
          margin="normal"
          id="date"
          label="Date"
          format="EEEE, MMMM do, yyyy"
          value={p.date}
          onChange={p.handleDate}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        <div
          style={{
            display: 'flex',
            width: '530px',
            justifyContent: 'space-between',
          }}
        >
          <KeyboardTimePicker
            className={`${s.short} ${classes.picker}`}
            color="secondary"
            inputVariant="outlined"
            margin="normal"
            id="start time"
            label="Start Time"
            value={p.startTime}
            onChange={p.handleStartTime}
            KeyboardButtonProps={{
              'aria-label': 'change time',
            }}
          />
          <KeyboardTimePicker
            className={`${s.short} ${classes.picker}`}
            color="secondary"
            inputVariant="outlined"
            margin="normal"
            id="end time"
            label="End Time"
            value={p.endTime}
            onChange={p.handleEndTime}
            KeyboardButtonProps={{
              'aria-label': 'change time',
            }}
          />
        </div>
      </MuiPickersUtilsProvider>
      <div style={{ marginTop: '25px', marginBottom: '30px' }}>
        <Button
          button
          className="dark"
          onClick={handleOpen}
          size="28px"
          width="300px"
          height="65px"
        >
          Book Room
        </Button>
      </div>
      <Confirm open={open} close={handleClose} />
    </div>
  );
};

export default Booking;

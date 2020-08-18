import React, { useState } from 'react';
import { format } from 'date-fns';
import { Divider } from '@material-ui/core';
import { ViewList } from '@material-ui/icons';
import Section from '../components/Section';
import Button from '../components/Button';
import Status from '../components/Status';
import Carousel from './Carousel';
import Booking from './Booking';
import s from './Details.module.css';
import { ReactComponent as Chair } from '../img/chair.svg';
import table from '../img/table.svg';

const Details = () => {
  const [date, setDate] = useState(new Date());
  const [startTime, setStartTime] = useState(date);
  const [endTime, setEndTime] = useState(startTime.getTime() + 3600000);
  const handleDate = (date) => {
    setDate(date);
  };

  const handleStartTime = (time) => {
    setStartTime(time);
  };

  const handleEndTime = (time) => {
    setEndTime(time);
  };
  return (
    <div className={s.details}>
      <Section className="sect">
        <div className={s.roomName}>ALPHA ROOM</div>
        <Carousel />
        <div className={s.status}>
          <Status className={s.available}>Available</Status>
          <div className={s.until}>Until {format(endTime, 'hh:mma')}</div>
        </div>
        <div style={{ marginBottom: '20px' }}>
          <Button
            button
            className="light"
            size="20px"
            width="250px"
            height="50px"
          >
            Check Schedule
          </Button>
        </div>
        <div
          style={{
            display: 'flex',
            width: '470px',
            fontSize: '18px',
            marginTop: '22px',
          }}
        >
          <div className="center column">
            <div className="flex">
              <ViewList
                style={{
                  fontSize: '33px',
                  color: 'black',
                  marginLeft: '6px',
                  transform: 'translate(0, -3px)',
                }}
              />
              <div style={{ marginLeft: '6px' }}>Features</div>
            </div>
            <ul style={{ color: '#333' }}>
              <li>TV Display</li>
              <li>Whiteboard</li>
              <li>HDMI</li>
              <li>Wireless</li>
            </ul>
          </div>
          <div style={{ marginLeft: 'auto', marginRight: '40px' }}>
            <div className="flex">
              <Chair style={{ transform: 'scale(0.8) translate(0, -2px)' }} />
              <div style={{ marginLeft: '6px' }}>Seats: 10</div>
            </div>
            <div className="flex" style={{ marginTop: '6px' }}>
              <img
                src={table}
                alt="table"
                style={{ transform: 'scale(0.8) translate(0, 14px)' }}
              />
              <div style={{ marginLeft: '6px', marginTop: '22px' }}>
                Tables: 1
              </div>
            </div>
          </div>
        </div>
        <Divider
          style={{
            background: '#bdbdbd',
            width: '39%',
            marginTop: '15px',
            marginBottom: '32px',
          }}
        />
        <Booking
          date={date}
          handleDate={handleDate}
          startTime={startTime}
          handleStartTime={handleStartTime}
          endTime={endTime}
          handleEndTime={handleEndTime}
        />
      </Section>
    </div>
  );
};

export default Details;

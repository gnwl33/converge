import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import s from './Details.module.css';
import Car from 'react-bootstrap/Carousel';
import { ChevronLeft, ChevronRight } from '@material-ui/icons';
import orange from './orangeroom.png';
import whiteboard from './whiteboard.png';
import blueprint from './blueprint.png';

const Carousel = () => {
  return (
    <Car
      className={s.carousel}
      prevIcon={
        <div
          style={{
            marginRight: '222px',
            background: '#333',
            borderRadius: '100px',
          }}
        >
          <ChevronLeft style={{ fontSize: '50px' }} />
        </div>
      }
      nextIcon={
        <div
          style={{
            marginLeft: '222px',
            background: '#333',
            borderRadius: '100px',
          }}
        >
          <ChevronRight style={{ fontSize: '50px' }} />
        </div>
      }
    >
      <Car.Item>
        <img
          src={orange}
          alt="orange room"
          style={{ borderRadius: '10px', width: '100%' }}
        />
      </Car.Item>
      <Car.Item>
        <img
          src={whiteboard}
          alt="orange room with whiteboard"
          style={{ borderRadius: '10px', width: '100%' }}
        />
      </Car.Item>
      <Car.Item>
        <img
          src={blueprint}
          alt="orange room blueprint"
          style={{ borderRadius: '10px', width: '100%' }}
        />
      </Car.Item>
    </Car>
  );
};

export default Carousel;

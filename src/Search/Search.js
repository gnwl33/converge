import React, { useState } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import {
  InputLabel,
  Select,
  MenuItem,
  FormControl,
  Checkbox,
  ListItemText,
  TextField,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
} from '@material-ui/core';
import Section from '../components/Section';
import Button from '../components/Button';
import s from './Search.module.css';
import orange from './orangeroom.png';
import dark from './darkroom.png';
import green from './greenroom.png';
import brown from './brownroom.png';
import blue from './blueroom.png';
import mono from './monoroom.png';
// import Confirm from '../Confirm/Confirm';

const rooms = [orange, dark, green, brown, blue, mono];

const Search = () => {
  let count = 0;
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [features, setFeatures] = useState([
    'Whiteboard',
    'TV Display',
    'Wireless',
  ]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleChangeMultiple = (event) => {
    const { options } = event.target;
    const value = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    setFeatures(value);
  };

  return (
    <div className={s.container}>
      <Section className={s.filters} height="331">
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <div className={s.upperRow}>
            <KeyboardDatePicker
              className={s.long}
              color="secondary"
              inputVariant="outlined"
              margin="normal"
              id="date"
              label="Date"
              format="MM/dd/yyyy"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
            <KeyboardTimePicker
              className={s.short}
              color="secondary"
              inputVariant="outlined"
              margin="normal"
              id="start time"
              label="Start Time"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                'aria-label': 'change time',
              }}
            />
            <KeyboardTimePicker
              className={s.short}
              color="secondary"
              inputVariant="outlined"
              margin="normal"
              id="end time"
              label="End Time"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                'aria-label': 'change time',
              }}
            />
          </div>
        </MuiPickersUtilsProvider>
        <div className={s.upperRow}>
          <FormControl className={s.long} color="secondary" variant="outlined">
            <InputLabel className={s.label} id="features">
              Features
            </InputLabel>
            <Select
              labelId="features"
              id="features"
              value={features}
              onChange={handleChangeMultiple}
              multiple
            >
              {features.map((feature) => (
                <MenuItem>
                  <Checkbox />
                  <ListItemText primary={feature} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            className={s.short}
            label="No. of Seats"
            color="secondary"
            variant="outlined"
          />
          <TextField
            className={s.short}
            label="No. of Tables"
            color="secondary"
            variant="outlined"
          />
        </div>
        <div className={s.bottomRow}>
          <Button className={s.button} size="24px" width="20%" height="55px">
            Apply Filters
          </Button>
        </div>
      </Section>
      <Grid container className={s.cardContainer}>
        {rooms.map((room) => {
          let position =
            count % 3 === 0
              ? s.leftCard
              : count % 3 === 1
              ? s.middleCard
              : s.rightCard;
          count += 1;
          return (
            <Grid item xs={4}>
              <Card className={position}>
                <CardMedia
                  className={s.cardImg}
                  component="img"
                  src={room}
                  title="Orange Room"
                />
                <div className={s.cardDetails}>
                  <CardContent className={s.cardContent}>
                    <Grid container style={{ marginBottom: '7px' }}>
                      <Grid item xs={6}>
                        ALPHA ROOM
                      </Grid>
                      <Grid item xs={6}>
                        Available: Until 2:00PM
                      </Grid>
                    </Grid>
                    <Grid container>
                      <Grid item xs={6}>
                        Seats: 10
                      </Grid>
                      <Grid item xs={6}>
                        TV Display, HDMI, Wir...
                      </Grid>
                    </Grid>
                  </CardContent>
                  <CardActions className={s.cardActions}>
                    <Button
                      className="light"
                      size="20px"
                      width="46%"
                      height="45px"
                    >
                      View Details
                    </Button>
                    <Button
                      className="dark right"
                      size="20px"
                      width="46%"
                      height="45px"
                    >
                      Instant Book
                    </Button>
                  </CardActions>
                </div>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Search;

// const [open, setOpen] = React.useState(false);

// const handleOpen = () => {
//   setOpen(true);
// };

// const handleClose = () => {
//   setOpen(false);
// };

// <Button
//   className="dark"
//   width="334px"
//   height="87px"
//   size="35px"
//   onClick={handleOpen}
// >
//   Confirm
// </Button>

// <Confirm open={open} close={handleClose} />

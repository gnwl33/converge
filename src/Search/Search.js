import React, { useState } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { format } from 'date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import {
  Button as B,
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
import { Close } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import Section from '../components/Section';
import Button from '../components/Button';
import s from './Search.module.css';
import { button } from '../components/Button.module.css';
import orange from './orangeroom.png';
import dark from './darkroom.png';
import green from './greenroom.png';
import brown from './brownroom.png';
import blue from './blueroom.png';
import mono from './monoroom.png';
import Confirm from '../Confirm/Confirm';
import Status from '../components/Status';

const useStyles = makeStyles({
  picker: {
    '& .MuiOutlinedInput-adornedEnd': {
      paddingRight: '2px',
    },
  },
  select: {
    '& .MuiSelect-icon': {
      marginRight: '4px',
    },
  },
  // close: {
  //   '&.MuiButton-root': {
  //     minWidth: 0,
  //   },
  // },
});

const Search = () => {
  const allFeatures = ['TV Display', 'HDMI', 'Wireless', 'Whiteboard'];
  const rooms = [orange, dark, green, brown, blue, mono];
  const [date, setDate] = useState(new Date());
  const [startTime, setStartTime] = useState(date);
  const [endTime, setEndTime] = useState(startTime.getTime() + 3600000);
  const [features, setFeatures] = useState([]);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDate = (date) => {
    setDate(date);
  };

  const handleStartTime = (time) => {
    setStartTime(time);
  };

  const handleEndTime = (time) => {
    setEndTime(time);
  };

  const handleChange = (event) => {
    setFeatures(event.target.value);
  };

  const removeFeature = (feature) => {
    const idx = features.indexOf(feature);
    const copy = [...features];
    copy.splice(idx, 1);
    setFeatures(copy);
  };

  const classes = useStyles();
  let count = 0;

  return (
    <div className="sect-ctnr">
      <Section className="sect" height="331">
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <div className={s.upperRow}>
            <KeyboardDatePicker
              className={`${s.long} ${classes.picker}`}
              color="secondary"
              inputVariant="outlined"
              margin="normal"
              id="date"
              label="Date"
              format="EEEE, MMMM do, yyyy"
              value={date}
              onChange={handleDate}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
            <KeyboardTimePicker
              className={`${s.short} ${classes.picker}`}
              color="secondary"
              inputVariant="outlined"
              margin="normal"
              id="start time"
              label="Start Time"
              value={startTime}
              onChange={handleStartTime}
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
              value={endTime}
              onChange={handleEndTime}
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
              className={classes.select}
              labelId="features"
              id="features"
              value={features}
              multiple
              onChange={handleChange}
              renderValue={() => null}
            >
              {allFeatures.map((feature) => (
                <MenuItem key={feature} value={feature}>
                  <Checkbox checked={features.indexOf(feature) > -1} />
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
          <div className={s.filters}>
            {features.map((feature) => {
              const elem = (
                <div className={`${s.filter} ${button}`} key={feature}>
                  <div style={{ margin: '5px 20px' }}>{feature}</div>
                  <B
                    className={s.filterX}
                    onClick={() => removeFeature(feature)}
                  >
                    <Close style={{ fontSize: '34px', color: 'white' }} />
                  </B>
                </div>
              );
              return elem;
            })}
          </div>
          <Button
            button
            className={s.button}
            size="24px"
            width="20%"
            height="55px"
          >
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
          let status = count % 3 === 0 ? 'Available' : 'In Use';
          let align =
            count % 3 === 0
              ? { transform: 'translate(-11px)' }
              : { transform: 'translate(-3px)' };
          count += 1;
          return (
            <Grid item xs={4} key={room}>
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
                      <Grid
                        item
                        xs={6}
                        style={{
                          fontWeight: 'bold',
                          fontSize: '18px',
                          paddingTop: '4px',
                          paddingLeft: '8px',
                          overflow: 'hidden',
                          whiteSpace: 'nowrap',
                          textOverflow: 'ellipsis',
                        }}
                      >
                        ALPHA ROOM
                      </Grid>
                      <Grid
                        item
                        xs={6}
                        style={{
                          marginTop: '2px',
                          paddingLeft: '10px',
                          overflow: 'hidden',
                          whiteSpace: 'nowrap',
                          textOverflow: 'ellipsis',
                        }}
                      >
                        <div className="flex v-center" style={align}>
                          <Status
                            className={status.toLowerCase()}
                            padding="4px 5px"
                            margin="5px"
                            radius="7px"
                          >
                            {status}
                          </Status>
                          Until {format(endTime, 'hh:mma')}
                        </div>
                      </Grid>
                    </Grid>
                    <Grid container>
                      <Grid
                        item
                        xs={6}
                        style={{
                          paddingLeft: '8px',
                          overflow: 'hidden',
                          whiteSpace: 'nowrap',
                          textOverflow: 'ellipsis',
                        }}
                      >
                        Seats: 10
                      </Grid>
                      <Grid
                        item
                        xs={6}
                        style={{
                          overflow: 'hidden',
                          whiteSpace: 'nowrap',
                          textOverflow: 'ellipsis',
                          paddingLeft: '10px',
                        }}
                      >
                        TV Display, HDMI, Wireless, Whiteboard
                      </Grid>
                    </Grid>
                  </CardContent>
                  <CardActions className={s.cardActions}>
                    <Button
                      to="/details"
                      className="light ellipsis"
                      size="20px"
                      width="46%"
                      height="45px"
                    >
                      View Details
                    </Button>
                    <Button
                      button
                      className="dark right ellipsis"
                      size="20px"
                      width="47%"
                      height="45px"
                      onClick={handleOpen}
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
      <Confirm open={open} close={handleClose} />
    </div>
  );
};

export default Search;

import React, { useState } from 'react';
import { createTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import {Typography} from '@material-ui/core';
import NavBar from './components/NavBar';
import Grid from './components/Grid';
import Footer from './components/Footer';
import DateTimePicker from 'react-datetime-picker'

import EventNoteIcon from '@material-ui/icons/EventNote';


const theme = createTheme({
  palette: {
    primary: {
      main:"#2e1667",
    },
    secondary: {
      main:"#c7d8ed",
    },
  },
  typography: {
    fontFamily: [
      'Roboto'
    ],
    h4: {
      fontWeight: 600,
      fontSize: 28,
      lineHeight: '2rem',
      },
    h5: {
      fontWeight: 100,
      lineHeight: '2rem',
    },
  },
});

const styles = makeStyles({
  wrapper: {
    width: "65%",
    margin: "auto",
    textAlign: "center"
  },
  bigSpace: {
    marginTop: "5rem"
  },
  littleSpace:{
    marginTop: "2.5rem",
  },
  grid:{
    display: "flex", 
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap", 
  },
})



function App() {
  const [value, onChange] = useState(new Date());
  const [nHour,hourSelect] = useState(0);
  const classes = styles();
  const currentDate=new Date();


  function calculatePrice(date,hours){
  if ((date.getDay()===6) || (date.getDay()===0)){
    return 150*hours
  }
  else{
    return 100*hours
  } 
}

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <NavBar></NavBar>
      <div>
      <div className={classes.wrapper}>
          <Typography variant="h4" className={classes.bigSpace} color="primary">
             Booking App By Kledi Mama
          </Typography>
          <Typography variant="h5" className={classes.littleSpace} color="primary">
          Here at BookingByKledi we strive to offer our clients the most reliable and efficient booking service available. It is without a doubt the most state of the art and easy to use service on the market. This is because we value our customers deeply and believe that our clients deserve nothing but the best.
          </Typography>
          <Typography variant="h5" className={classes.littleSpace} color="primary">
          To proceed, simply select the date and amount of time required for the booking.
          </Typography>
        </div>
      <div className={`${classes.grid} ${classes.smallSpace}`}>          
          <grid>
            <div style={{display: 'flex', justifyContent: 'center'}}>
              <p>
              <strong>PLEASE SELECT YOUR DESIRED DATE</strong>
              </p>
            </div>
            <div style={{display: 'flex', justifyContent: 'center'}}>
            <DateTimePicker onChange={onChange} value={value} 
            minDate={currentDate}/>
            </div>
            <div style={{display: 'flex', justifyContent: 'center'}}>
              <p>
            <strong>NUMBER OF HOURS REQUIRED:</strong>
            </p>
            </div>
            <div style={{display: 'flex', justifyContent: 'center'}}>
            <input type="number"  min="1" max="12" onChange={e => hourSelect(e.target.value)} ></input>
            </div>
          </grid>
          <Grid icon={<EventNoteIcon style={{fill: "#7e4dee", height:"125", width:"125"}}/>} title={calculatePrice(value,nHour)} text="Your Price Estimation In $:" btnTitle="Proceed With Booking"/>
        </div>
        </div>
        <div style={{display: 'flex', justifyContent: 'center',paddingTop:'50px'}}>Disclaimer this is only an interface. Pressing buttons will take you nowhere.</div>
        <div className={classes.littleSpace}>
          <Footer/>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;

import { makeStyles } from '@material-ui/core'
import React from 'react'
import Typewitter from './Typewitter';
import Switch from 'react-switch';



const useStyles = makeStyles (()=>({
    text:{
        textAlign:'center',
        fontSize: 'clamp(1rem, 3vw + 1rem, 4rem)',
        position:'relative',
        width:'100%',

    },
    text_elements:{
    backgroundColor:'hsl(49 37% 94%)',
    minHeight:'100vh',
    maxWidth:'100vw',
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    fontSize:'calc(10px+2vmin)',
    color: 'black'

    }
}))

function Hero() {
   const classes = useStyles();
  return (
    <div className={classes.text_elements}>
    <div >
    <h1>Hey, I am Raghav Gupta</h1>
    <h3 className={classes.text}>
        <Typewitter/>
    </h3>
    <Switch
    uncheckedIcon={
        <span
          className="iconify"
          data-icon="twemoji:owl"
          data-inline="false"
          style={{
            display: "block",
            height: "100%",
            fontSize: 25,
            textAlign: "end",
            marginLeft: "20px",
            color: "#353239",
          }}
        ></span>
      }
      checkedIcon={
        <span
          className="iconify"
          data-icon="noto-v1:sun-with-face"
          data-inline="false"
          style={{
            display: "block",
            height: "100%",
            fontSize: 25,
            textAlign: "end",
            marginLeft: "10px",
            color: "#353239",
          }}
        ></span>
      }
      id="icon-switch"
    />
    </div>
    </div>
  )
}

export default Hero
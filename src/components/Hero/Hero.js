import { makeStyles } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles (()=>({
    text:{
        textAlign:'center'
    },
    text_elements:{
    backgroundColor:'black',
    minHeight:'100vh',
    maxWidth:'100vw',
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    fontSize:'calc(10px+2vmin)',
    color: 'white'

    }
}))

function Hero() {
   const classes = useStyles();
  return (
    <div className={classes.text_elements}>
    <div className={classes.text}>
    <p>
    Hey there bud! Interested in my life ? you sure are let's see what I have learnt!
    </p>
    </div>
    </div>
  )
}

export default Hero
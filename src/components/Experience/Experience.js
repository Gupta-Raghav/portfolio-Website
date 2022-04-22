import { makeStyles } from '@material-ui/core';
import React from 'react'

const useStyles = makeStyles (() => ({
    text:{
        textAlign:'center'
    },
    text_elements:{
    backgroundColor:'black',
    minHeight:'50vh',
    maxWidth:'100%',
    display:'flex',
    flexDirection:'row',
    fontSize:'calc(10px+2vmin)',
    color: 'white'

    },
    card_elements:{
        maxWidth:'100%',
        alignItems:'center'
    },
    grid_items:{
        borderCollapse:'black'
    }
}))

function Experience() {
 const classes = useStyles();
  return (
    <div className={classes.text_elements}>Experience section</div>
  )
}

export default Experience
import { Grid, makeStyles } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles (() => ({
    text:{
        textAlign:'center'
    },
    text_elements:{
    backgroundColor:'white',
    minHeight:'50vh',
    maxWidth:'100%',
    display:'flex',
    flexDirection:'row',
    fontSize:'calc(10px+2vmin)',
    color: 'black'

    },
    card_elements:{
        maxWidth:'100%',
        alignItems:'center'
    },
    grid_items:{
        borderCollapse:'black',
        outline : 'solid'

    }
}))

function About() {
  const classes = useStyles();
  return (
    <div className={classes.text_elements}>
    <Grid container spacing={3} justifyContent='space-evenly' className={classes.card_elements}>
        <Grid item className={classes.grid_items}>
            first card
        </Grid>
        <Grid item>
            second card
        </Grid>
        <Grid item>
            third card
        </Grid>
        <Grid item>
            third card
        </Grid>
        <Grid item>
            third card
        </Grid>
        <Grid item>
            third card
        </Grid>
        <Grid item>
            third card
        </Grid>
        <Grid item>
            third card
        </Grid>
        <Grid item>
            third card
        </Grid>
        
    </Grid>
    </div>
  )
}

export default About
import { Grid, makeStyles } from '@material-ui/core'
import React from 'react'
import GitHubCalendar from 'react-github-calendar'
export default function Github() {
    const useStyles = makeStyles(()=>({
        calendar:{
            display:'grid',
            justifyContent:'center',
            paddingtop: '15px'
        }
    }))
    const classes = useStyles();
  return (
    <Grid item  className={classes.calendar}>
        <h1>My Productive <strong color="purple">Days</strong></h1>
        <GitHubCalendar
        username="gupta-raghav"
        blockSize={15}
        blockMargin={5}
        color="#c084f5"
        fontSize={16}
      />
    </Grid>
  )
}

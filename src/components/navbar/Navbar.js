import React from 'react'
import { makeStyles,AppBar, Grid, Toolbar } from '@material-ui/core'

const useStyles = makeStyles (()=>({
  root:{
    flexGrow:1,
    backgroundBlendMode:true
  },
  Navbar:{
    display:'flex',
    flexDirection: 'row'
  }

}))

function Navbar() {
  const classes= useStyles();
  return (
    <div className={classes.root}>
      <AppBar position='static' className='Navbar'>
        <Toolbar>
        <Grid container row justifyContent='space-between'>
          <Grid item xs>
          It's Rg
          </Grid>
          <Grid item xs/>
          <Grid item xs>
          about
          </Grid>
          <Grid item xs>
          projects
          </Grid>
          <Grid item xs>
          Work
          </Grid>
        </Grid>
        </Toolbar>
       
        </AppBar>
    </div>
  )
}

export default Navbar
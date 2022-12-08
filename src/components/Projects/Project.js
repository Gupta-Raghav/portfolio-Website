import { Grid, makeStyles } from '@material-ui/core';
import React from 'react'
import { Container } from "react-bootstrap";
import Particle from '../Bgparticle/Particle';
import Card from './project-card';
import blog from '../../Assets/Projects/blog.png'

export default function Project() {
  const useStyles = makeStyles(()=>({
    grid:{
      padding:'2em',
    },
    card:{
    paddingTop: '50px !important',
    paddingBottom: '50px !important',
    paddingLeft: '25px !important',
    paddingRight: '25px !important',
    height: 'auto !important',
    backgroundColor: 'linear-gradient(to bottom left,rgba(17, 16, 16, 0.582),rgba(12, 8, 24, 0.904))'
    }
  }));
  const classes = useStyles();
  return (
    <div>
      <Container fluid className="project-section">
        <Particle/>
        <h1 className="project-heading">
        My Recent Project
         <strong className='purple'> Works</strong>
        </h1>
        <span/>
        <Grid container justify="space-evenly" style={{ alignItems: 'center',paddingTop: '16px' }}>
        <Grid item xs={12} sm={6} md={4} className={classes.grid}>
        <Card className={classes.card} img={blog}/>
        </Grid>
        <Grid item xs={12} sm={6} md={4} className={classes.grid}>
        <Card className={classes.card}/>
        </Grid>
        <Grid item xs={12} sm={6} md={4} className={classes.grid}>
        <Card className={classes.card}/>
        </Grid>
        <Grid item xs={12} sm={6} md={4} className={classes.grid}>
        <Card className={classes.card}/>
        </Grid>
  
        </Grid>
      </Container>
    </div>
  )
}

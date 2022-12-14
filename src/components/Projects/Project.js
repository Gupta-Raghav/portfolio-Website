import { Grid, makeStyles } from '@material-ui/core';
import React from 'react'
import { Container } from "react-bootstrap";
import Particle from '../Bgparticle/Particle';
import Card from './project-card';
import twitter from '../../Assets/twtitter.png';
import whatsapp from '../../Assets/whatsapp.png';
import EM from '../../Assets/EM.png'

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
        <Card className={classes.card} name={"Twitter engine"} description={`This is a twitter engine designed hard coded every bit of this applicaiton on erlang. This twitter engine is capable of all the generic features offered by twitter such as Tweet, retweet, query hash-tag, query-mentions, User passwords are encrypted using SHA-256. Currently working on improving the functionalities with websockets`} github={"https://github.com/Gupta-Raghav/DOSP-COP5615/tree/main/Project-4"}img={twitter}/>
        </Grid>
        <Grid item xs={12} sm={6} md={4} className={classes.grid}>
        <Card className={classes.card} name={"Event manager"} img={EM}description={"As a minor project for my bachelor's degree, my team mate and I planned and implemented an event management system. This tool can reduce the time it takes to submit an event proposal from 7 days to 1 day. This project was being discussed with college officials in order to be implemented in day-to-day operations."} github={"https://github.com/Gupta-Raghav/eventmanager"}/>
        </Grid>
        <Grid item xs={12} sm={6} md={4} className={classes.grid}>
        <Card className={classes.card} name={"Whats app clone"} description={"I started devloping this as a part of my last internship as the privacy for a some social media websites were changing, this was developed in order to protect the privacy of the work of the company I was working for It also supports end-to-end encryption using 256-bit ElipticCurve algorithm."} github={"https://github.com/Gupta-Raghav/whatsapp-clone"} img={whatsapp}/>
        </Grid>
        {/* <Grid item xs={12} sm={6} md={4} className={classes.grid}>
        <Card className={classes.card}/>
        </Grid> */}
  
        </Grid>
      </Container>
    </div>
  )
}

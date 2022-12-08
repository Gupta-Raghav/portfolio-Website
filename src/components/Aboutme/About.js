import { Grid, makeStyles } from '@material-ui/core'
import React from 'react'
import { Container } from 'react-bootstrap';
import Particle from '../Bgparticle/Particle'
import SkillSet from './SkillSet';

export default function About() {
  const useStyles = makeStyles(()=>({
    about:{
        position:'relative',
        paddingTop: '150px !important',
        paddingBottom: '30px !important',
        backgroundImage: 'linear-gradient(to bottom left,rgba(17, 16, 16, 0.582),rgba(12, 8, 24, 0.904))',
        color: 'white !important'
    },
    hero:{
        justifyContent:'space-evenly'
    }
  })) 
  const classes= useStyles();
  return (
    <Container fluid className='about-section'>   
        <Particle/>
        <Grid container className={classes.hero}>
            <Grid item md={6} style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}>
                Professional Introduction
            </Grid>
            <Grid item md={6} style={{ paddingTop: "70px", paddingBottom: "50px" }}>
                Image
            </Grid>
        </Grid>
        <Grid style={{justifyContent:'center'}}>
           <h1 ><strong className='Purple'>SkillSet</strong></h1>
            <SkillSet/>
        </Grid>
    </Container>
  )
}

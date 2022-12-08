import { Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import { Container } from 'react-bootstrap';
import Particle from '../Bgparticle/Particle'
import Github from './github';
import SkillSet from './SkillSet';
import laptopImg from "../../Assets/about.png";


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
                 <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong></h1>
                <Typography>
                    Hi Everyone, I am <span className="purple">Raghav Gupta </span>
                    currently pursuing <span className="purple">Masters in Computer science .</span>
                    <br />from University of Florida.
                    <br />
                     <br />
            Apart from programming I love doing 
            
            <ul style={{listStyle:'none'}}>
            <li>
               Playing Games
            </li>
            <li >
               Writting Tech Blogs
            </li>
            <li >
               Travelling
            </li>
          </ul>
          </Typography>
            </Grid>
            <Grid item md={4} style={{ paddingTop: "70px", paddingBottom: "50px" }}>
            <img src={laptopImg} alt="about" className="img-fluid" />
            </Grid>
        </Grid>
        <Grid style={{justifyContent:'center'}}>
           <h1 ><strong className='Purple'>SkillSet</strong></h1>
            <SkillSet/>
        </Grid>
        <Grid style={{justifyContent:'center'}}>
           <Github  />
        </Grid>
    </Container>
  )
}

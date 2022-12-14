import { Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import { Container } from 'react-bootstrap';
import Particle from '../Bgparticle/Particle'
import Github from './github';
import SkillSet from './SkillSet';
import laptopImg from "../../Assets/about.png";
import Card from './expertiseCard';
import {HiOutlineComputerDesktop} from 'react-icons/hi2';
import {SiBlockchaindotcom} from 'react-icons/si';
import {DiReact} from 'react-icons/di'
export default function About() {
  const useStyles = makeStyles(()=>({
    about:{
        position:'relative',
        paddingTop: '150px !important',
        paddingBottom: '30px !important',
        backgroundImage: 'linear-gradient(to bottom left,rgba(17, 16, 16, 0.582),rgba(12, 8, 24, 0.904))',
        color: 'white !important'
    },
    grid:{
      padding:'1em',
      border:'solid', 
      maxHeight:'300px',
      maxWidth: '350px'
    },
    hero:{
        justifyContent:'space-evenly',
    },
    card:{
      border:'solid',
      border:'1.7px solid rgba(200, 137, 230, 0.637)',
      borderRadius: '5px',
      minWidth: '100%',
      minHeight:'100%',
      paddingTop: '50px !important',
      paddingBottom: '50px !important',
      paddingLeft: '25px !important',
      paddingRight: '25px !important',
      height: 'auto !important',
      backgroundColor: 'linear-gradient(to bottom left,rgba(17, 16, 16, 0.582),rgba(12, 8, 24, 0.904))'
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
                Editing and learning more about UI/Ux 
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
        <Grid container className={classes.hero}>
            <Grid item>
            <Typography> <h1 ><strong className='Purple'>My Expertise</strong></h1></Typography>
            <Grid container justify="space-evenly" style={{ alignItems: 'center', border:'white' }} spacing={0}>
            <Grid item xs={12} sm={6} md={4} className={classes.grid}>
        <Card className={classes.card} name={"Software Development"} color='blue' icon={<HiOutlineComputerDesktop/>} description={"Experienced in both functional and OOP: python, erlang, Javascript"}/>
        </Grid>
        <Grid item xs={12} sm={6} md={4} className={classes.grid}>
        <Card className={classes.card} name={"Frontend Dev: React, NExtJS"} icon={<DiReact/>} description={"Passionate about Ui/Ux. Over 2 years of development experience in HTML,CSS,JS and React Framework"} />
        </Grid>
        <Grid item xs={12} sm={6} md={4} className={classes.grid}>
        <Card className={classes.card} name={"web 3.0: Blockchain"} icon={<SiBlockchaindotcom/>} description={"Firm understanding of the underlying principles of blockchain, authored a book chapeter published in CRC press. Currently learning to develop Decentralized applications using solidity and Javascript."}/>
        </Grid>
        {/* <Grid item xs={12} sm={6} className={classes.gridm}>
        <Card className={classes.card} name={"web 3.0: Blockchain"} icon={<SiBlockchaindotcom/>} description={"Firm understanding of the underlying principles of blockchain, authored a book chapeter published in CRC press. Currently learning to develop Decentralized applications using solidity and Javascript."}/>
        </Grid> */}
            </Grid>
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

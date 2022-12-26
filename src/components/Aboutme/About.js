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
      borderStyle:'solid',
      borderWidth:"3px 3px 3px 1.5px",
      borderColor:'#a3a3a3',
      padding:'1em',
      minHeight:'350px',
      // maxWidth: '300px'
    },
    gridm:{
      display:'none',  
    },
    '@media (max-width:800px) and (min-width: 599px)':{
      gridm:{
        display:'block'
      },
    },
    hero:{
        justifyContent:'space-evenly',
    },
    card:{
      border:'solid',
      // border:'1.7px solid rgba(200, 137, 230, 0.637)',
      // borderRadius: '5px',
      Width: '100%',
      Height:'100%',
      overflow: 'hidden',
      paddingTop: '50px !important',
      paddingBottom: '50px !important',
      paddingLeft: '25px !important',
      paddingRight: '25px !important',
      height: 'auto !important',
      backgroundColor: 'linear-gradient(to bottom left,rgba(17, 16, 16, 0.582),rgba(12, 8, 24, 0.904))'
    }
  })) 
  const computer = <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42"><path d="M18,34.111l-1.667,6.667L14.111,43H31.889l-2.222-2.222L28,34.111M3,25.222H43M7.444,34.111H38.556A4.444,4.444,0,0,0,43,29.667V7.444A4.444,4.444,0,0,0,38.556,3H7.444A4.444,4.444,0,0,0,3,7.444V29.667A4.444,4.444,0,0,0,7.444,34.111Z" transform="translate(-2 -2)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>;
  const react = <svg xmlns="http://www.w3.org/2000/svg" width="40" height="44.964" viewBox="0 0 40 44.964"><path d="M21.087,20.97a4.015,4.015,0,1,0,5.485,1.469A4.015,4.015,0,0,0,21.087,20.97Zm18,4.356q-.4-.452-.834-.906.307-.322.594-.644c3.61-4.056,5.134-8.124,3.722-10.57-1.354-2.345-5.381-3.044-10.422-2.063q-.745.146-1.482.329-.141-.486-.3-.967C28.65,5.351,25.887,2,23.064,2c-2.708,0-5.325,3.141-6.994,8q-.246.719-.456,1.449-.493-.121-.989-.223c-5.319-1.092-9.6-.373-11.013,2.074-1.351,2.347.062,6.182,3.436,10.054q.5.575,1.032,1.124c-.417.429-.812.859-1.18,1.285-3.293,3.817-4.625,7.59-3.276,9.927,1.393,2.413,5.617,3.2,10.758,2.191q.625-.124,1.243-.279.226.79.5,1.567c1.662,4.76,4.264,7.8,6.963,7.8,2.786,0,5.58-3.266,7.272-8.226.134-.392.26-.8.38-1.218q.8.2,1.607.353c4.954.937,8.886.2,10.232-2.138,1.39-2.415-.043-6.466-3.495-10.408ZM5.276,14.257c.867-1.506,4.369-2.094,8.961-1.151q.44.091.9.2a46.005,46.005,0,0,0-.947,6.02,46.956,46.956,0,0,0-4.73,3.807q-.493-.51-.96-1.045h0C5.6,18.773,4.462,15.671,5.276,14.257Zm8.738,12.878c-1.148-.869-2.215-1.76-3.183-2.655.968-.89,2.035-1.777,3.18-2.644q-.062,1.325-.061,2.651t.064,2.648Zm0,8.859a16.269,16.269,0,0,1-5.935.209,3.97,3.97,0,0,1-2.79-1.476c-.818-1.418.251-4.447,3.067-7.712q.531-.614,1.1-1.2a46.066,46.066,0,0,0,4.737,3.822,46.768,46.768,0,0,0,.958,6.1q-.564.141-1.135.254ZM29.977,17.92q-1.131-.713-2.29-1.38-1.141-.656-2.308-1.264c1.333-.561,2.644-1.039,3.909-1.429a40.955,40.955,0,0,1,.69,4.073Zm-12.092-7.3c1.43-4.162,3.547-6.7,5.179-6.7,1.738,0,4,2.739,5.473,7.189q.144.435.272.875a46.038,46.038,0,0,0-5.681,2.183,45.1,45.1,0,0,0-5.663-2.208Q17.659,11.286,17.886,10.622Zm-.9,3.2a41.159,41.159,0,0,1,3.889,1.443q-2.362,1.219-4.6,2.656C16.452,16.488,16.692,15.114,16.986,13.823Zm-.711,17.223q1.117.715,2.267,1.378,1.173.675,2.377,1.294A40.909,40.909,0,0,1,17,35.212C16.7,33.9,16.457,32.505,16.275,31.046ZM28.54,38.117a16.267,16.267,0,0,1-2.783,5.245h0a3.97,3.97,0,0,1-2.672,1.679c-1.637,0-3.727-2.439-5.148-6.509q-.251-.722-.462-1.457a45.207,45.207,0,0,0,5.686-2.27,46.762,46.762,0,0,0,5.727,2.2q-.16.56-.347,1.111Zm.814-2.977c-1.28-.4-2.609-.882-3.962-1.451q1.144-.6,2.3-1.271,1.191-.687,2.32-1.409a40.811,40.811,0,0,1-.663,4.132Zm1-10.662q0,2.048-.128,4.093c-1.108.75-2.277,1.482-3.494,2.184s-2.412,1.342-3.59,1.924q-1.859-.891-3.646-1.92T16.028,28.58q-.155-2.044-.156-4.1h0q0-2.05.153-4.1c1.107-.756,2.268-1.488,3.468-2.181s2.421-1.336,3.63-1.917q1.836.892,3.606,1.912t3.482,2.155q.147,2.056.147,4.118Zm2.151-11.45c4.319-.84,7.576-.275,8.392,1.138.869,1.505-.377,4.83-3.493,8.333h0q-.258.29-.536.582a45.1,45.1,0,0,0-4.82-3.795,45.055,45.055,0,0,0-.912-5.955q.7-.172,1.369-.3Zm-.292,8.733a40.837,40.837,0,0,1,3.285,2.67,40.735,40.735,0,0,1-3.275,2.716q.052-1.335.051-2.672,0-1.358-.062-2.715Zm8.7,13.014c-.817,1.419-3.974,2.011-8.211,1.209q-.728-.137-1.494-.327a45.12,45.12,0,0,0,.871-6.029,44.826,44.826,0,0,0,4.8-3.858q.4.412.755.82h0a16.264,16.264,0,0,1,3.154,5.031,3.969,3.969,0,0,1,.121,3.153Z" transform="translate(-3.104 -2)" fill="#fff"></path></svg>
  const bc = <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M19.8285 6.6117l-5.52-5.535a3.1352 3.1352 0 00-4.5 0l-5.535 5.535 7.755 3.87zm2.118 2.235l1.095 1.095a3.12 3.12 0 010 4.5L14.22 23.3502a2.6846 2.6846 0 01-.72.525V13.0767zm-19.893 0l-1.095 1.095a3.1198 3.1198 0 000 4.5L9.78 23.3502c.2091.214.4525.3914.72.525V13.0767z"></path></svg>
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
                <Typography align='left'>
                Hey! My name is <strong className="purple">Raghav Gupta</strong> and I am currently pursuing my <strong className='purple'>master's degree in computer science</strong> at the University of Florida. 
                I have a strong interest in creating applications that address real-world problems, 
                and I have experience in front-end web development using <strong className='purple'>React.js, HTML, and CSS</strong>.
                <br/>
                <br/>
                In addition to my programming skills, I am also interested in <strong className='purple'>UI/UX design</strong> and am always looking for ways
                  to improve the user experience.
                  When I'm not working on projects, I enjoy exploring new places, 
                  trying out different cuisines, <strong className='purple'>capturing cadid moment</strong>, and playing competitive <strong className='purple'>FPS-shooter games</strong>. 
                  <br/>
                  <br/>
                  These diverse interests help me bring a unique perspective to my work as a developer.
            
          </Typography>
            </Grid>
            <Grid item md={4} style={{ paddingTop: "70px", paddingBottom: "50px" }}>
            <img src={laptopImg} alt="about" className="img-fluid" />
            </Grid>
        </Grid>
        {/* <br/> */}
        {/* <br/> */}
        {/* <br/> */}
        <Grid container className={classes.hero}>
         <h1 >My<span className='purple'> Expertise</span></h1>
            <Grid item>
            <Grid container justify="space-evenly" style={{ alignItems: 'center', border:'white' }} spacing={0}>
            <Grid item xs={12}  md={4} className={classes.grid}>
        <Card className={classes.card} name={"Software"} subName={"Development"} color='blue' icon={computer} description={"I am experienced in functional and object-oriented programming languages including python, erlang, JavaScript, and C++. I have used these languages to build a variety of projects and am comfortable working in different environments"}/>
        </Grid>
        <Grid item xs={12}  md={4} className={classes.grid}>
        <Card className={classes.card} name={"Frontend"} subName={"Development"} color='magenta' icon={react} description={"I am passionate about UI/UX design and have over 2 years of development experience in HTML, CSS, JS, and the React framework. I have completed internships and have developed multiple projects using these technologies."} />
        </Grid>
        <Grid item xs={12}  md={4} className={classes.grid}>
        <Card className={classes.card} name={"web 3.0: "}  subName={"Blockchain"} color='orange' icon={bc} description={"Firm understanding of the underlying principles of blockchain and smart contracts, authored a book chapter published in CRC press. Currently learning to develop Decentralized applications using solidity and Javascript."} />
        </Grid>
        <Grid item xs={12}  className={classes.gridm}>
        <Card className={classes.card} name={"I'm looking "} subName={"for ways to 'help' others and make a positive impact on the world."} description={"ooooh so you are checking the media queries? congrats you found the easter on the website"}/>
        </Grid>
            </Grid>
        </Grid>
        </Grid>
        <br/>
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

import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import {CgCPlusPlus} from 'react-icons/cg';
import {TbBrandBootstrap} from 'react-icons/tb';
import {SiJavascript} from 'react-icons/si';
import {DiPython,DiNodejs,DiReact,DiErlang, DiLinux, DiMongodb} from 'react-icons/di';

export default function SkillSet() {
    const useStyles = makeStyles(()=>({
        icons:{
            fontSize: '4.5em' ,
            margin:'15px',
            padding: '10px',
            opacity: '0.93',
            border:'1.7px solid rgba(200, 137, 230, 0.637)',
            borderRadius: '5px',
            textAlign:'center',
            // objectFit:'contain',
            verticalAlign:'middle',
            overflow: 'hidden',
            boxShadow: '4px 5px 4px 3px rgba(89, 4, 168, 0.25)',
            transition: 'all 0.4s ease 0s',
            "&:hover":{
                transform: 'scale(1.04)',
                boxShadow: '4px 5px 4px 3px rgba(89, 4, 168, 0.4)',
            }
        }
    }))
    const classes = useStyles();
  return (
    <>
    <Grid container justify="space-evenly" >
        <Grid item xs={4} md={2} className={classes.icons}>
            <CgCPlusPlus/>
        </Grid>
        <Grid item  xs={4} md={2}className={classes.icons}>
            <DiPython/>
        </Grid>
        <Grid item xs={4} md={2}className={classes.icons}>
            <SiJavascript/>
        </Grid>
        <Grid item xs={4} md={2}className={classes.icons}>
            <DiNodejs/>
        </Grid>
        <Grid item xs={4} md={2}className={classes.icons}>
            <DiReact/>
        </Grid>
        <Grid item xs={4} md={2}className={classes.icons}>
            <DiErlang/>
        </Grid>
        <Grid item xs={4} md={2}className={classes.icons}>
            <DiLinux/>
        </Grid>
        <Grid item xs={4} md={2}className={classes.icons}>
            <DiMongodb/>
        </Grid>
        <Grid item xs={4} md={2}className={classes.icons}>
            <AiFillGithub/>
        </Grid>
        <Grid item xs={4} md={2}className={classes.icons}>
            <TbBrandBootstrap/>
        </Grid>

    </Grid>
    </>
  )
}

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Grid, makeStyles } from '@material-ui/core';

export default function MultiActionAreaCard({img,name,description,github,site,icon,color}) {
    const useStyles = makeStyles(()=>({
        card:{
          backgroundColor: "transparent !important",
          opacity: '0.9',
          minHeight: '300px',
          overflow:'hidden',
        },
        icons:{
          fontSize: '2em' ,
          // borderRadius: '5px',
          // textAlign:'center',
          // verticalAlign:'middle',
        },
        text:{
          color:'white',
          textAlign:'left',
        },
        description:{
          color:'white',
          textAlign:'left',
          '&:before':{
            color:'white',
            content: "<h3>",
            marginRight: 8,
          },
          // '&:after':{
          //   content: "</h3>",
          // }
        }
        // chonky-underline-megenta:{
        //   '&:after': {
        //   transition: 'all 0.1s ease-in-out',
        //   content: "",
        //   position: 'absolute',
        //   bottom: '13.5%',
        //   zIndex: '-1',
        //   height: '0.3em',
        //   width: '104%',
        //   left: '-1%',
        //   background: 'linear-gradient(65deg, #DF058D 0%, #DF058D 100%, rgba(255, 209, 0, 0) 100%);
        // }}
      }));
      const classes = useStyles();
  return (
    <div >
    <Card className={classes.card}>
      <CardActionArea>
        {/* <CardMedia sx={{objectFit:'contain'}}
          component='img'
          height="200"
          image={img}
          alt="green iguana"
        /> */}
        <CardContent>
          <Grid container style={{display:'flex',justifyContent:'space-evenly'}} className={classes.text}>
            <Grid item className={classes.icons}>
              {icon}
            </Grid>
            {/* <Grid item xs={1}></Grid> */}
            <Grid item style={{textDecoration:`4px underline ${color}`}}>
            <Typography gutterBottom variant="h5" component="div" >{name}</Typography>
            </Grid>
            </Grid>
          <Typography variant="body3" className={classes.description} style={{textAlign:'left',}}>
          {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      {/* <CardActions>
        <Button href={github} size="small" color="primary">
          Github
        </Button>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions> */}
    </Card>
    </div>
  );
}
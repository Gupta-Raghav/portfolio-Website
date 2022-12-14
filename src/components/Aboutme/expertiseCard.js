import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Grid, makeStyles } from '@material-ui/core';

export default function MultiActionAreaCard({img,name,description,github,site,icon}) {
    const useStyles = makeStyles(()=>({
        card:{
          backgroundColor: "transparent !important",
          opacity: '0.9',
          minHeight: '350px',
          overflow:'hidden',
        },
        icons:{
          fontSize: '2em' ,
          borderRadius: '5px',
          textAlign:'center',
          verticalAlign:'middle',
        },
        text:{
            color:'white',
            textAlign:'left'
        }
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
          <Typography gutterBottom variant="h5" component="div" className={classes.text}>
            
            <Grid container style={{display:'flex', flexDirection:'row'}}>
            <Grid item className={classes.icons}>
              {icon}
            </Grid>
            {/* <Grid item xs={1}></Grid> */}
            <Grid item>
            {name}
            </Grid>
            </Grid>
          </Typography>
          <Typography variant="body2" className={classes.text}>
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
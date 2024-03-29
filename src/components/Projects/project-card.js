import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { makeStyles } from '@material-ui/core';



export default function MultiActionAreaCard({img,name,description,github,site}) {
    const useStyles = makeStyles(()=>({
        card:{
          backgroundColor: "transparent !important",
          opacity: '0.9',
          boxShadow: '0 4px 5px 3px rgba(119, 53, 136, 0.459)',
          transition: 'all 0.5s ease 0s !important',
          minHeight: '500px',
          "&:hover":{
            transform:'scale(1.09)',
            overflow: 'hidden', 
            boxShadow: '0 4px 4px 5px rgba(129, 72, 144, 0.561)',
          }
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
        <CardMedia sx={{objectFit:'contain'}}
          component='img'
          height="200"
          image={img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" className={classes.text}>
            {name}
          </Typography>
          <Typography variant="body2" className={classes.text}>
          {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button href={github} size="small" color="primary">
          Github
        </Button>
        {/* <Button size="small" color="primary">
          Share
        </Button> */}
      </CardActions>
    </Card>
    </div>
  );
}
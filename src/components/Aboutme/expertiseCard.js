import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { css } from '@emotion/react';
import "./expertiseCard.css";
const useStyles = makeStyles({
  card: {
    backgroundColor: 'transparent !important',
    opacity: '0.9',
    minHeight: '100%',
    overflow: 'hidden',
  },
  
  icons: {
    fontSize:"2.75em",
    marginRight: '1px',
    position: 'absolute',
    // top: '0',
    // left: '0'
  },
  text: {
    color: 'white',
    textAlign: 'left',
  },
  description: css({
    height:'100%',
    margin:'auto',
    paddingTop:'2px',
    color: '#fff',
    '&::before': {
      color: 'white',
      content: '"<h3>"',
      marginRight: 8,
    },
    '&::after': {
      content: '"</h3>"',
    },
  }),
});

const MultiActionAreaCard = ({ img, name, description, github, site, icon, color,subName }) => {
  const classes = useStyles();
 
  return (
    <div>
      <Card className={classes.card}>
        <CardActionArea>
          <CardContent>
            <Grid container className={classes.text}>
              <div>
              <Grid item className={classes.icons}>
                {icon}
              </Grid>
              <h5 className='heading' >
              <span className={`underline-${color}`}>
                {name}
              </span>
              <br/>
              {subName}
              </h5>
              </div>
            </Grid>
            <div className="content">
            <div className="description" align="left">
              {description}
            </div>
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default MultiActionAreaCard;
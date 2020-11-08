import React from 'react'; 
import '../App.css';
import side from '../assets/elements/side.svg'; 
import Grid from '@material-ui/core/Grid';
import useStyles from '../utils/styles';
import {  Typography } from '@material-ui/core';
import HistoryItem from './elements/HistoryItem';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

function Side() {
    const classes = useStyles();
  return (
    <aside className="side">
        <img src={side} className="sideBackground" />
        <div className={classes.root}>
            <Grid container spacing={1}>
                <Grid item xs={12} style={{textAlign: 'right'}}>
                    <Fade>
                        <Typography variant="h5" className="sectionName"> Product history </Typography>
                    </Fade>
                    <div className="spacer"></div>
                </Grid> 
                
                <Grid item xs={12} style={{textAlign: 'right'}}> 
                    <Slide right>
                        <HistoryItem date="20.10.2019" content="Date of Birth"/>
                        <HistoryItem date="20.10.2019" content="Date of Birth"/>
                        <HistoryItem date="20.10.2019" content="Date of Birth"/>
                        <HistoryItem date="20.10.2019" content="Date of Birth"/>
                    </Slide>
                </Grid> 
            </Grid>
        </div> 
    </aside>
  );
}

export default Side;

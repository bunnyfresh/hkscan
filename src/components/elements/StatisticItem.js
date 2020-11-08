import React from 'react'; 
import '../../App.css';  
import { Box, Grid, Typography } from '@material-ui/core';
 

function StatisticItem(props) { 
  return (
    <Box component="div" display="block" className="statisticItem">
        <Grid container spacing={1}>
            <Grid item xs={12} style={{textAlign: 'center'}}>
                <img src={props.icon} className="statisticIcon" />
            </Grid>  
            <Grid item xs={12} style={{textAlign: 'center'}}>
                <Typography variant="h4" > {props.type} </Typography>
            </Grid>  
            <Grid item xs={12} style={{textAlign: 'center'}}>
                <Typography variant="h3" > {props.score} </Typography>
            </Grid>
        </Grid>
    </Box>
  );
}

export default StatisticItem;

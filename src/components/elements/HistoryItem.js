import React from 'react'; 
import '../../App.css';  
import { Box, Grid, Typography } from '@material-ui/core';
 

function HistoryItem(props) { 
  return (
    <Box component="div" display="block" className="historyItem">
        <Grid container spacing={2}>
            <Grid item md={4} xs={6} style={{textAlign: 'left'}}>
                <Typography paragraph > {props.date} </Typography>
            </Grid> 
            <Grid item md={8} xs={6} style={{textAlign: 'right'}}>
                <Typography paragraph  > {props.content} </Typography>
            </Grid> 
        </Grid>
    </Box>
  );
}

export default HistoryItem;

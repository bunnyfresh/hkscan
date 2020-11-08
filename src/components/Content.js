import React from 'react'; 
import '../App.css';
import Grid from '@material-ui/core/Grid';
import useStyles from '../utils/styles'; 
import Side from './Side';
import barcode from '../assets/elements/barcode.png';
import pig from '../assets/icons/pig.svg';
import { Box, Button, Hidden, Typography } from '@material-ui/core';
import StatisticItem from './elements/StatisticItem';
import Rating from '@material-ui/lab/Rating';
import swal from 'sweetalert';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';

function handleClick() {
    swal("Thank you!", "We are happy to improve our service for you", "success");
}
function Content() {
    const classes = useStyles();
  return (
    <main> 
        <div className="spacer"></div>
        <div className={classes.root}>
            
            <Grid container spacing={3}>
                
                <Hidden mdUp>
                    <Grid item xs={12}  md={2} />
                </Hidden>
                <Grid item xs={12}  md={5}  style={{textAlign: 'center'}}>
                    
                <Slide left cascade>
                    <Typography variant="h5" className="sectionName"> MAUSTAMATON FILEESUIKALE </Typography>
                    <Box component="div" display="block" style={{marginTop: 25, position: 'relative' , textAlign: 'left '}}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}  md={7}>
                                <Box component="p" display="block" className="mainInfoItem">
                                    Prepared: 12.10.2020
                                </Box>
                                <Box component="p" display="block" className="mainInfoItem">
                                    Expiration date: 30.10.2020
                                </Box>
                                <Box component="p" display="block" className="mainInfoItem">
                                    Producer: Kariniemen
                                </Box>
                                <Box component="p" display="block" className="mainInfoItem">
                                    Weight: 400 g
                                </Box>
                                <Box component="p" display="block" className="mainInfoItem">
                                    Laktoosi:  0 g/100 g
                                </Box>
                                <Box component="p" display="block" className="mainInfoItem">
                                    Tuotenumero:  2521
                                </Box>
                                <Box component="p" display="block" className="mainInfoItem">
                                    EAN:  6409100025212
                                </Box>
                            </Grid>
                            <Grid item xs={12}  md={5}>
                                <img src={barcode} className='barcode' />
                            </Grid>
                            <Grid item xs={12}> 
                                <div className="spacer"></div>
                                <Button variant="contained" color="primary" className="infoButton">
                                    Something Wrong?
                                </Button>
                                <Box component="p" display="block" textAlign="center" color="#002a78" >
                                    Click and we will solve this problem
                                </Box>
                            </Grid>
                        </Grid>
                        
                    </Box> 
                    </Slide> 
                </Grid> 
                <Grid item  xs={12}  md={6}   style={{textAlign: 'center', position: 'relative'}}> 
                    <Side />
                </Grid>
                <Grid item xs={12} style={{textAlign: 'left'}}>
                    <div className="spacer"></div>
                    <Grid container spacing={4}>
                        <Grid item xs={12} style={{textAlign: 'left'}}>
                            <div className="spacer"></div>
                            <Fade>
                                <Typography variant="h5" style={{background: 'rgba(255,255,255,0.9)', display: 'inline-block' }} className="sectionName"> Party Statistics </Typography>
                            </Fade>
                            <div className="spacer"></div>
                        </Grid> 
                        <Grid item xs={12}  md={3}   style={{textAlign: 'left'}}>
                            <Slide bottom>
                                <StatisticItem icon={pig} type="PIG ACTIVITIES" score="79%" />
                            </Slide>
                        </Grid> 
                        <Grid item  xs={12}  md={3}  style={{textAlign: 'left'}}>
                            <Slide bottom>
                                <StatisticItem icon={pig} type="PIG ACTIVITIES" score="79%" />
                            </Slide>
                        </Grid> 
                        <Grid item xs={12}  md={3}  style={{textAlign: 'left'}}>
                            <Slide bottom>
                                <StatisticItem icon={pig} type="PIG ACTIVITIES" score="79%" />
                            </Slide>
                        </Grid> 
                        <Grid item xs={12}  md={3}  style={{textAlign: 'left'}}>
                            <Slide bottom>
                                <StatisticItem icon={pig} type="PIG ACTIVITIES" score="79%" />
                            </Slide>
                        </Grid> 
                        <Grid item xs={12}  md={3}  style={{textAlign: 'left'}}>
                            <Slide bottom>
                                <StatisticItem icon={pig} type="PIG ACTIVITIES" score="79%" />
                            </Slide>
                        </Grid> 
                        <Grid item xs={12}  md={3}  style={{textAlign: 'left'}}>
                            <Slide bottom>
                                <StatisticItem icon={pig} type="PIG ACTIVITIES" score="79%" />
                            </Slide>
                        </Grid> 
                        <Grid item xs={12}  md={3}  style={{textAlign: 'left'}}>
                            <Slide bottom>
                                <StatisticItem icon={pig} type="PIG ACTIVITIES" score="79%" />
                            </Slide>
                        </Grid> 
                        <Grid item xs={12}  md={3}  style={{textAlign: 'left'}}>
                            <Slide bottom>
                                <StatisticItem icon={pig} type="PIG ACTIVITIES" score="79%" />
                            </Slide>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} style={{textAlign: 'center'}}>
                    <div className="spacer"></div>
                    <div className="spacer"></div>
                    <Slide bottom>
                    <Typography variant="h5" className="sectionName"> Was this information helpful? </Typography>
                    <Rating
                        name="star-raiting"
                        defaultValue={2}
                        precision={0.5}
                        className="starRaiting"
                        onClick={handleClick}
                        emptyIcon={<StarBorderIcon fontSize="inherit" />}
                    />
                    </Slide>
                </Grid>

                <Grid item xs={12} style={{textAlign: 'center'}}> 
                    <Box component="div" display="block" style={{position: 'relative'}}>
                        <Slide left duration={4000}>
                            <Box component="span" display="inline-block" className="hideBackgroundTitle">MAUSTAMATON <br/> FILEESUIKALE</Box>
                        </Slide>
                    </Box>  
                    <Hidden mdDown>
                        <div className="spacer"></div>
                        <div className="spacer"></div>
                        <div className="spacer"></div>
                        <div className="spacer"></div>
                        <div className="spacer"></div>
                    </Hidden>
                </Grid>
            </Grid>
          </div>
        </main>
  );
}

export default Content;

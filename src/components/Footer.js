import React from 'react'; 
import '../App.css';
import footer from '../assets/elements/footer.svg';
import logo from '../assets/logo.svg'; 
import yt from '../assets/social/yt.svg'; 
import tw from '../assets/social/tw.svg'; 
import inst from '../assets/social/inst.svg'; 
import Grid from '@material-ui/core/Grid';
import useStyles from '../utils/styles'; 
import { Box, Hidden, Link, Typography } from '@material-ui/core';
import Recipe from './Recipe';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';

function Footer() {
    const classes = useStyles();
  return (
    <footer className="footer">
        <img src={footer} className="footerBackground" />
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Hidden mdDown>
                    <Grid item md={1} xs={12}/>
                </Hidden>
                <Grid item md={11} xs={12} style={{textAlign: 'left'}}>
                    <Fade>
                        <Typography variant="h5" className="sectionName"> 
                            Some great recipes with <br/>
                            <Box component="i" className="b">“MAUSTAMATON FILEESUIKALE”</Box>
                        </Typography>
                     </Fade>
                </Grid>
                <Grid item xs={12} style={{textAlign: 'left'}}>
                    <Slide left>
                        <Recipe />
                    </Slide>
                    <div className="spacer"></div>
                    <div className="spacer"></div>
                </Grid>
                <Grid item md={4} xs={12} style={{textAlign: 'center'}}>
                    <Link href="https://www.hkscan.com/en/"  color="inherit">
                        <img src={logo} className="logoFooter" />
                    </Link> 
                </Grid>
                <Grid item md={4} xs={12} style={{textAlign: 'center'}}> 
                    <ul className="social tt-15">
                        <li>
                            <Link href="#"  color="inherit">
                                <img src={tw} />
                            </Link> 
                        </li>
                        <li>
                            <Link href="#"  color="inherit">
                                <img src={inst} />
                            </Link> 
                        </li>
                        <li>
                            <Link href="#"  color="inherit">
                                <img src={yt} />
                            </Link> 
                        </li>
                    </ul> 
                </Grid>
                
                <Grid item md={4} xs={12} className="footerContact" style={{textAlign: 'right' ,     marginTop: '-100px'}}>
                    <Box component='b' color='#fff' fontSize='20px' >
                        Contact information
                    </Box>

                    <Box component='p' color='#fff' fontSize='16px' >
                        PL 50 (Lemminkäisenkatu 48) <br /> 
                        20521 Turku<br /> 
                        TEL +358 10 570 100<br /> 
                        FAX +358 10 570 6146<br /> 
                        firstname.surname@hkscan.com<br /> 
                    </Box>

                    <Box component='b' color='#fff' fontSize='20px' >
                        Privacy at HKScan
                    </Box>
                    
                    <Box component='p' color='#fff' fontSize='20px' >
                        <Link href="#" style={{color: '#fff'}}>
                            Terms of Use
                        </Link>
                    </Box>
                </Grid>
            </Grid>
        </div> 
    </footer>
  );
}

export default Footer;

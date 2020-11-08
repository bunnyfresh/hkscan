import React from 'react'; 
import '../../App.css';  
import { Box, Button, Grid, Typography } from '@material-ui/core';
import qrlabel from '../../assets/elements/qr_label.png';
import Fade from 'react-reveal/Fade'; 
import QRCode from 'qrcode.react';
import { useSelector } from 'react-redux';
import { selectUrls } from '../../features/urls/urlsSlice';


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function CodeGenerator(props) { 

  const urls = useSelector(selectUrls);

  const createUrl = () => {
      return window.location.origin + urls[getRandomInt(0 , urls.length - 1)];
  } 

  return (
    <Grid container spacing={3}>
        <Grid item xs={12}  style={{textAlign: 'center'}}>
            <Fade bottom delay={500} duration={3000} cascade>
                <Box component="div"  display="block" marginBottom={15}>
                    <Box component="div"  display="inline-block" className="codeGenerator">
                        <img src={qrlabel} />
                        <QRCode className="qr" value={createUrl()} />
                    </Box>
                </Box>

                <Box component="p"  display="block" textAlign="center">
                    This is a test version of what QR codes might look like on your products. 
                    Scan it from your phone and <br /> you will be taken to the generated page with information about your product.
                </Box>

                <Button variant="contained" onClick={()=>{window.location = window.location.origin}}  style={{display: 'inline-block' , width: 200}} color="primary" className="infoButton">
                    Go home
                </Button> 
            </Fade>
        </Grid>
    </Grid>
  );
}

export default CodeGenerator;

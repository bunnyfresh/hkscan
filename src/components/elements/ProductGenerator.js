import React, { useState } from 'react'; 
import '../../App.css';  
import { Box, Button, Grid, Typography } from '@material-ui/core';
import qrlabel from '../../assets/elements/qr_label.png';
import Fade from 'react-reveal/Fade'; 
import QRCode from 'qrcode.react';
import { useSelector } from 'react-redux';
import { selectUrls } from '../../features/urls/urlsSlice';
import {DropzoneArea} from 'material-ui-dropzone';

// function getRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

function ProductGenerator(props) { 

  const [photo, setPhoto] = useState(null);
  const [save, setSave] = useState(false);
  const [showDropArea, setHide] = useState(true);

  const urls = useSelector(selectUrls);

//   const createUrl = () => {
//       return window.location.origin + urls[getRandomInt(0 , urls.length - 1)];
//   }

    const handleChange = (file) => {
        setPhoto(file); 
    }

    const handleSave = () => {
        setSave(true);
        setHide(false);
 
        const canvas = document.getElementsByTagName('canvas')[0];
        if(canvas && photo.length > 0){
            const context = canvas.getContext('2d');
 
            var img = new Image();

            img.onload = function(){
                context.drawImage(img, 0, 0)
            }
            img.src = URL.createObjectURL(photo[0]);  
        }
        
    }

  return (
    <Grid container spacing={3}>
        <Grid item xs={12}  style={{textAlign: 'center'}}>
            <Fade when={showDropArea} bottom delay={500} duration={3000} cascade>
                 
                <Box component="div"  display="block" marginBottom={15}>
                    <Box component="div"  display="inline-block" >
                        <DropzoneArea
                            clearOnUnmount={true}
                            filesLimit={1}  
                            acceptedFiles={[  'image/png' ]}
                            showPreviews={true}
                            onChange={handleChange.bind(this)}
                            maxFileSize={5000000}
                        />
                    </Box>
                     
                </Box> 
                <Button variant="contained" onClick={handleSave}   style={{display: 'inline-block' , width: 200}} color="default" >
                        Save
                    </Button>
                
            </Fade>
            <Fade when={!showDropArea} bottom delay={500} duration={3000} cascade  >
                 
                <Box component="div"  display="block" marginBottom={15}>
                    <Box component="div"  display="inline-block" >
                        <canvas />
                    </Box> 
                </Box> 

                <Button variant="contained" onClick={handleSave}   style={{display: 'inline-block' , width: 200}} color="default" >
                        Save
                    </Button> 
                
            </Fade>
            <Box component="p"  display="block" textAlign="center">
                    This is a test version of what QR codes might look like on your products. 
                    Scan it from your phone and <br /> you will be taken to the generated page with information about your product.
            </Box>

            <Button variant="contained" onClick={()=>{window.location = window.location.origin}}  style={{display: 'inline-block' , width: 200}} color="primary" className="infoButton">
                Go home
            </Button> 
        </Grid>
    </Grid>
  );
}

export default ProductGenerator;

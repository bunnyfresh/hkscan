import React from 'react'; 
import '../App.css';  
import { Box, Button, Grid } from '@material-ui/core';
import meat from '../assets/meat.jpg';
import meat2 from '../assets/meat2.jpg';
import meat3 from '../assets/meat3.jpg';
 
const goAway = (url) => {
  if(url){
    window.location = url;
  } 
}
function Recipe() { 
  return (
    <div className="recipes"> 
            <Grid container spacing={3}> 
                <Grid item md={4} xs={12} style={{textAlign: 'left'}}>
                    <Box component="div" display="block" className="recipe" style={{backgroundImage: 'url('+meat+')'}}>
                          <Button onClick={() => {goAway('https://www.kariniemen.fi/reseptit/resepti/kalkkuna-uunissa-lahi-idan-maustein/')}}>CHICKEN BAGEL BURGER</Button>
                    </Box>
                </Grid>
                <Grid item md={4} xs={12} style={{textAlign: 'left'}}>
                    <Box component="div" display="block" className="recipe" style={{backgroundImage: 'url('+meat2+')'}}>
                      <Button onClick={() => {goAway('https://www.kariniemen.fi/reseptit/resepti/kalkkuna-uunissa-lahi-idan-maustein/')}}>CHICKEN BAGEL BURGER</Button>
                    </Box>
                </Grid>
                <Grid item md={4} xs={12} style={{textAlign: 'left'}}>
                    <Box component="div" display="block" className="recipe" style={{backgroundImage: 'url('+meat3+')'}}>
                      <Button onClick={() => {goAway('https://www.kariniemen.fi/reseptit/resepti/kalkkuna-uunissa-lahi-idan-maustein/')}}>CHICKEN BAGEL BURGER</Button>
                    </Box>
                </Grid>
            </Grid> 
    </div>
  );
}

export default Recipe;

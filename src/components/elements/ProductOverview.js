import { Box, Grid, Hidden} from '@material-ui/core';
import React  from 'react'; 
import '../../App.css';  
import Slide from 'react-reveal/Slide'; 
import Fade from 'react-reveal/Fade'; 
import Points from './Points';
import circle from '../../assets/elements/circle.svg';
import chicken from '../../assets/products/chicken.png'

 
let product = chicken;

var params = window
    .location
    .search
    .replace('?','')
    .split('&')
    .reduce(
        function(p,e){
            var a = e.split('=');
            p[ decodeURIComponent(a[0])] = decodeURIComponent(a[1]);
            return p;
        },
        {}
    );

console.log( params['data']);
function ProductOverview(){
    return (
        <>
        <Grid container spacing={3}>
         {/* PRODUCT OVERVIEW */}
         <Grid item xs={12}  md={5} style={{textAlign: 'left'}}> 
            <Fade  delay={500} bottom> 
                <Box component="div" display="block" className="productWrapper">
                    <img src={circle}  className="productBG" />
                    <Box component="span" display="inline-block" className="productLabel">Product № 29948210.</Box>
                    
                        <Box component="div" display="block" className="productImage">
                            <Points />
                            <img src={product} />
                        </Box> 
                
                </Box>  
            </Fade>
        </Grid>
        
        <Hidden mdUp>
            <Grid item xs={12}  md={2} /> 
        </Hidden>
        <Grid item xs={12}  md={5} style={{textAlign: 'left'}}> 
            <Slide   duration={3000} right> 
                <Box component="div" display="block" style={{position: 'relative'}}>
                    <Box component="span" display="inline-block" className="hideBackgroundTitle">MAUSTAMATON <br/> FILEESUIKALE</Box>
                </Box>  
            </Slide>
        </Grid>
        </Grid>
        </>
    )
}

export default ProductOverview;
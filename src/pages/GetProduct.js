import React from 'react';  
import Footer from '../components/Footer'; 
import useStyles from '../utils/styles';
import '../App.css';   
import ProductGenerator from '../components/elements/ProductGenerator';


function GetProduct() {
  const classes = useStyles();
  return (
    <>  
        <div className={classes.rootDashboard}>
            <ProductGenerator />
        </div>
        <Footer />
    </> 
  );
}

export default GetProduct;

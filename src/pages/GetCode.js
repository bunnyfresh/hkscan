import React from 'react';  
import Footer from '../components/Footer'; 
import useStyles from '../utils/styles';
import '../App.css';  
import CodeGenerator from '../components/elements/CodeGenerator';


function GetCode() {
  const classes = useStyles();
  return (
    <>  
        <div className={classes.rootDashboard}>
            <CodeGenerator />
        </div>
        <Footer />
    </> 
  );
}

export default GetCode;

import React from 'react';  
import Footer from '../components/Footer';
import Header from '../components/Header';
import useStyles from '../utils/styles';
import '../App.css'; 
import Dashboard from '../components/Dashboard';


function Statistic() {
  const classes = useStyles();
  return (
    <>
        <Header />
            <div className={classes.rootDashboard}>
                <Dashboard />
            </div>
        <Footer />
    </> 
  );
}

export default Statistic;

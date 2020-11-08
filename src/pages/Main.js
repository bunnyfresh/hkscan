import React from 'react'; 
import Content from '../components/Content';
import Footer from '../components/Footer';
import Header from '../components/Header';
import useStyles from '../utils/styles';
import '../App.css'; 
import ProductOverview from '../components/elements/ProductOverview';


function Main() {
  const classes = useStyles();
  return (
    <>
        <Header />
        <ProductOverview />
        <Content />
        <Footer />
    </> 
  );
}

export default Main;

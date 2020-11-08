import React from 'react'; 
import './App.css'; 
import useStyles from './utils/styles'; 
import {
  BrowserRouter as Router,
  Switch,
  Route 
} from "react-router-dom";
import Main from './pages/Main';
import Statistic from './pages/Statistic'; 
import GetCode from './pages/GetCode';
import GetProduct from './pages/GetProduct';


function App() {
  const classes = useStyles();
  return (
    <Router>
    <div className="App"> 
        <Switch>
          <Route path="/code-generator">
            <GetCode />   
          </Route> 
          <Route path="/product-generator">
            <GetProduct />   
          </Route> 
          <Route path="/statistic">
            <Statistic />   
          </Route> 
          <Route path="/">
            <Main />   
          </Route> 
        </Switch>
    </div>
    </Router>
  );
}

export default App;

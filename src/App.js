import React from 'react';
import logo from './logo.svg';
import './App.css';
import Homepage from './components/Homepage';
import Loader from './components/Loader';
import {BrowserRouter , Route, Switch } from 'react-router-dom';
import {routes} from "../src/routes";
import Vision from './components/Vision';
function App() {
  const showItem = (routes) => {
    if (routes && routes.length >  0){
      return routes.map((item, index) => {
        return(
          <Route key = {index} exact = {item.exact} path = {item.path} component = {item.component}/>
        )
      })
    }
  }
  return (
    <div>
      <BrowserRouter>
      <Switch>
        {showItem(routes)}
      </Switch>
      </BrowserRouter>
      {/* <div className="loader-container">
        <Loader />
      </div>
      <div className="content-container">
        <Homepage />
      </div> */}
    </div>
  )
}

export default App;

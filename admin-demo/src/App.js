import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { main as mainConfig } from './router/index'
import { RenderRoutes } from './router/utils.js'
import './App.css';

import { createStore } from 'redux'  //+
import { Provider } from 'react-redux' //+
import { slidecollapsed } from '@/reducer/reduxs' //+



const store = createStore(slidecollapsed) 

class App extends Component {
  render() {
    return (
      <Provider store={store}>  
        <Router>
          <div className="App">
            <RenderRoutes routes={mainConfig}></RenderRoutes>
          </div>
        </Router>
      </Provider> 
    );
  }
}

export default App;

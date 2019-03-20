import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

import Login from '@/views/login/index'
import Index from '@/views/index/index'

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
            <Route exact path="/login" component={Login}/>
            <Route exact  path="/" component={Index}/>
          </div>
        </Router>
      </Provider> 
    );
  }
}

export default App;

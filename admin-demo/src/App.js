import React, { Component } from '../node_modules/_@types_react@16.8.10@@types/react';
import { BrowserRouter as Router, Route, Link } from "../../../../../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react-router-dom";
import './App.css';

import Login from '@/views/login/index'
import Index from '@/views/index/index'

import { Provider } from 'react-redux'
import store from './store/store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>  
        <Router>
          <div className="App">
            <Route  path="/login" component={Login}/>
            <Route   path="/" component={Index}/>
          </div>
        </Router>
      </Provider> 
    );
  }
}

export default App;

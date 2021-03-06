
import React, { Component } from 'react';
import {    Layout, Menu} from 'antd';
import './index.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import {withRouter} from "react-router-dom";
import Crumbs  from '@/components/crumbs' 
import MyHeader  from '@/components/header' 
import MySlider  from '@/components/slider' 

import Home  from '@/views/pages/home.jsx' 
import About  from '@/views/pages/about.jsx' 
import About2  from '@/views/pages/about2.jsx' 
import About3  from '@/views/pages/about3.jsx' 


class Index extends Component {

    render() {
        return (
            <Layout>
                <MyHeader></MyHeader>
                <Layout style={{ height:'calc(100% - 65px)'}}>
                    <MySlider></MySlider>
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Crumbs></Crumbs>
                        
                            <div>
                                <Route exact path="/"  component = { Home } />
                                <Route path="/about"  component={ About } />
                                <Route path="/about2"  component={ About2 } />
                                <Route path="/about3"  component={ About3 } />
                            </div>
                        
                    </Layout>
                </Layout>
            </Layout>
            
        )
    }
}
export default withRouter(Index);

import React, { Component } from 'react';
import {    Layout, Menu} from 'antd';
import './index.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Crumbs  from '@/components/crumbs' 
import MyHeader  from '@/components/header' 
import MyMain  from '@/components/main' 
import MySlider  from '@/components/slider' 


const Home = ()=> (
    <div>首页111111</div>
)
const About = ()=>(
    <div>关于11111111</div>

)

class Index extends Component {

    render() {
        return (
            <Router>
                <Layout>
                    <MyHeader></MyHeader>
                    <Layout style={{ height:'calc(100% - 65px)'}}>
                        <MySlider></MySlider>
                        <Layout style={{ padding: '0 24px 24px' }}>
                            <Crumbs></Crumbs>
                            
                                <div>
                                    <Route exact path="/" component = { Home } />
                                    <Route path="/about" component={ About } />
                                </div>
                           
                        </Layout>
                    </Layout>
                </Layout>
            </Router>
            
        )
    }
}
export default Index;
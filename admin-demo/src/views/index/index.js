
import React, { Component } from 'react';
import {    Layout, Menu} from 'antd';
import './index.css';

import Crumbs  from '@/components/crumbs' 
import MyHeader  from '@/components/header' 
import MyMain  from '@/components/main' 
import MySlider  from '@/components/slider' 


const content = (
    <div>
        <p>Content</p>
        <p>Content</p>
    </div>
);


class Index extends Component {

    render() {
        return (
            <Layout>
                <MyHeader></MyHeader>
                <Layout style={{ height:'calc(100% - 65px)'}}>
                    <MySlider></MySlider>
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Crumbs></Crumbs>
                        <MyMain></MyMain>
                    </Layout>
                </Layout>
            </Layout>
        )
    }
}
export default Index;
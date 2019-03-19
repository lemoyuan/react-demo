import React, { Component } from 'react';
import {Layout } from 'antd';
const { Content} = Layout;

class MyMain extends Component {
    render() {
        return (
            <div style={{ height:'calc(100% - 60px)'}}>
                <Content style={{background: '#fff', padding: 24, margin: 0, height:'90%',}}>
                    Content
                </Content>
            </div>
        )
    }
}
export default MyMain;
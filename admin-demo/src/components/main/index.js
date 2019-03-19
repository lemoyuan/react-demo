import React, { Component } from 'react';
import {Layout } from 'antd';
const { Content} = Layout;

class MyMain extends Component {
    render() {
        return (
            <div>
                <Content style={{background: '#fff', padding: 24, margin: 0, minHeight: 280,}}>
                    Content
                </Content>
            </div>
        )
    }
}
export default MyMain;
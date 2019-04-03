import React, { Component } from 'react';
import { Layout, Menu} from 'antd';
const { Header } = Layout;

class MyHeader extends Component {
    constructor(props){
        super(props)
        this.state = {
        };
    }

    toggle = () => { 
        // console.log(1);
        // console.log(this.state.onSlidecollapsed());
    }

    render() {
        // const { slidecollapsed } = this.props
        return (
            <div>
               <Header className="header">
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['1']}
                        style={{ lineHeight: '64px' }}
                    >
                        <Menu.Item key="1" onClick={this.toggle}>nav 1</Menu.Item>
                        <Menu.Item key="2">nav 2</Menu.Item>
                        <Menu.Item key="3">nav 3</Menu.Item>
                    </Menu>
                </Header>
            </div>
        )
    }
}
export default MyHeader;
import React, { Component } from 'react';
import { Layout, Menu} from 'antd';
import { connect } from "react-redux";
import "./header.css"
const { Header } = Layout;

class MyHeader extends Component {
    constructor(props){
        super(props)
        this.state = {
        };
    }

    toggle = () => { 
        // console.log(this.props.userInfo);
    }

    render() {
        return (
            <div>
               <Header className="header">
                    <div className="logo" >logo</div>
                    
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
                    <div className="user">{this.props.userInfo.name}</div>
                </Header>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        userInfo: state.userInfo
    };
};

MyHeader = connect(
    mapStateToProps,
)(MyHeader);
export default MyHeader;
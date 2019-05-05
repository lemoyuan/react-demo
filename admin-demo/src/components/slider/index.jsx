import React, { Component } from 'react';
import { Menu, Icon, Layout } from 'antd'; // +
import { BrowserRouter as Router,Link,Route } from "react-router-dom";
import { connect } from "react-redux";
const { Sider } = Layout; // +
const SubMenu = Menu.SubMenu;
class MySlider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            path: "1"
        };
    }
    componentDidMount() {
        if(sessionStorage.getItem('path')){
            this.setState({path: sessionStorage.getItem('path')}, function(){
            })
        }
        console.log(this.props.path,this.state.path)

    }
    savePath(index,subs){
        sessionStorage.setItem('path',index);
        sessionStorage.setItem('sub',subs);
    }
    render() {
        return (
            <div>
                <Sider width={200} style={{ background: '#fff' }}>
                    <Menu
                        mode="inline"
                        selectedKeys={[this.props.path]}
                        openKeys={['sub1']}
                        style={{ height: '100%', borderRight: 0 }}
                    >
                        <SubMenu key="sub1" title={<span><Icon type="user" />subnav 1</span>}>
                            <Menu.Item key="1" ><Link to="/" onClick={() => {
                                this.savePath('1','sub1')
                                this.props.onRouterPath('1');
                            }}>首页</Link></Menu.Item>
                            <Menu.Item key="2"><Link to="/about" onClick={() => {
                                this.savePath('2','sub1')
                                this.props.onRouterPath('2');
                            }}>关于</Link></Menu.Item>
                            <Menu.Item key="3" ><Link to="/about2" onClick={() => {
                                this.savePath('3','sub1')
                                this.props.onRouterPath('3');
                            }}>表单提交</Link></Menu.Item>
                            <Menu.Item key="4" ><Link to="/about3" onClick={() => {
                                this.savePath('4','sub1')
                                this.props.onRouterPath('4');
                            }}>基本操作</Link></Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" title={<span><Icon type="laptop" />subnav 2</span>}>
                            <Menu.Item key="5">option5</Menu.Item>
                            <Menu.Item key="6">option6</Menu.Item>
                            <Menu.Item key="7">option7</Menu.Item>
                            <Menu.Item key="8">option8</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub3" title={<span><Icon type="notification" />subnav 3</span>}>
                            <Menu.Item key="9">option9</Menu.Item>
                            <Menu.Item key="10">option10</Menu.Item>
                            <Menu.Item key="11">option11</Menu.Item>
                            <Menu.Item key="12">option12</Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        path: state.path
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onRouterPath: path => {
            dispatch({ type: "ROUTER_ACTION", path: path });
        }
    };
};

MySlider = connect(
    mapStateToProps,
    mapDispatchToProps
)(MySlider);

export default MySlider;
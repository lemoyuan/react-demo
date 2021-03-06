import React, { Component } from 'react';
import { Breadcrumb } from 'antd';
import { connect } from "react-redux";
class Crumbs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sub: "sub1",
            path: "1",
        };
    }
    componentDidMount() {
        console.log(this.props,"this.props")
        if(sessionStorage.getItem('path')){
            this.props.onRouterPath(sessionStorage.getItem('path'));
        }
    }
    componentWillReceiveProps(){
        console.log("componentWillReceiveProps")
    }

    shouldComponentUpdate () { 
        console.log("shouldComponentUpdate")
        return true 
    
    }
    componentWillUpdate() {
        console.log("componentWillUpdate")
     }
    componentWillUnmount() {
        console.log("componentWillUnmount")
    } 
    
    render() {
        const breadcrumbNameMap = {
            '1': 'home',
            '2': 'about1',
            '3': 'about2',
            '4': 'Detail',
            '5': 'Detail',
        };
        const pathSnippets = this.props.path;
        const extraBreadcrumbItems = 
                <Breadcrumb.Item key={pathSnippets}>
                    {breadcrumbNameMap[pathSnippets]}
                </Breadcrumb.Item>
        ;
        const breadcrumbItems = [(
            <Breadcrumb.Item key="home">
              Home
            </Breadcrumb.Item>
          )].concat(extraBreadcrumbItems);
        return (
            <div>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    {breadcrumbItems}
                </Breadcrumb>
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
Crumbs = connect(
    mapStateToProps,
    mapDispatchToProps
)(Crumbs);
export default Crumbs;
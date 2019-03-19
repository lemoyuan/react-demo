import React, { Component } from 'react';
import { Layout, Menu} from 'antd';
import { connect  } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from '@/reducer/connect'

const { Header } = Layout;

class MyHeader extends Component {
    constructor(props){
        super(props)
        this.state = {
            onSlidecollapsed: this.props.onSlidecollapsed
        };
    }

    toggle = () => { 
        // console.log(1);
        this.state.onSlidecollapsed()
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
                        defaultSelectedKeys={['2']}
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
export default connect(mapStateToProps, mapDispatchToProps)(MyHeader);
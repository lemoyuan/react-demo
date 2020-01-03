import React from 'react';
import { Icon } from 'antd';
import { connect } from "react-redux";
import './about3.less'
class About3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            arr:[
                {name:"稻香",singer:"周杰伦"},
                {name:"晴天",singer:"周杰伦"},
                {name:"稻香",singer:"周杰伦"},
                {name:"晴天",singer:"周杰伦"},
                {name:"稻香",singer:"周杰伦"},
                {name:"晴天",singer:"周杰伦"},
                {name:"稻香",singer:"周杰伦"},
                {name:"晴天",singer:"周杰伦"},
            ]
        }
    }
    goLink = () => {
        this.props.onRouterPath('3');
        this.props.history.push('/about2');
    }
    componentDidMount(){
        console.log(this.props.user,this.props);
        this.refs.inputBtn.focus();
    }
    render() {
        let self = this;
        return(
            <div>
                <input ref="inputBtn" type="text"/>搜索
                {this.state.arr.map(function(item,index){ 
                    return(
                        <p className="mu-item" key={index} onClick={self.goLink}>
                            <span>{index+1}</span>
                            <span>{item.name}</span>  
                            <span><Icon type="right-circle" /><Icon type="plus" /><Icon type="folder-add" /></span> 
                        </p>
                    )
                })}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        path: state.path,
        user:!!state.userInfo,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onRouterPath: path => {
            dispatch({ type: "ROUTER_ACTION", path: path });
        }
    };
};

About3 = connect(
    mapStateToProps,
    mapDispatchToProps
)(About3);

export default About3
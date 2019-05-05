import React from 'react';
import { Icon } from 'antd';
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
        this.props.history.push('/about2');
    }
    render() {
        let self = this;
        return(
            <div>
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
export default About3
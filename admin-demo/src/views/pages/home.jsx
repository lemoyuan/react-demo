import React from 'react';
import { Table } from 'antd';

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dataSource: [ {
                key: '1',
                name: '胡彦祖',
                age: 42,
                address: '西湖区湖底公园1号'
            },{
                key: '2',
                name: '胡彦斌',
                age: 32,
                address: '西湖区湖底公园1号'
            }, {
                key: '3',
                name: '胡彦祖',
                age: 42,
                address: '西湖区湖底公园1号'
            },{
                key: '4',
                name: '胡彦斌',
                age: 32,
                address: '西湖区湖底公园1号'
            }, {
                key: '5',
                name: '胡彦祖',
                age: 42,
                address: '西湖区湖底公园1号'
            },{
                key: '6',
                name: '胡彦斌',
                age: 32,
                address: '西湖区湖底公园1号'
            }, {
                key: '7',
                name: '胡彦祖',
                age: 42,
                address: '西湖区湖底公园1号'
            }],
            columns: [{
                title: '姓名',
                dataIndex: 'name',
                key: 'name',
                render: name => <b style={{color:'red'}}>{name}</b>
            }, {
                title: '年龄',
                dataIndex: 'age',
                key: 'age',
            }, {
                title: '住址',
                dataIndex: 'address',
                key: 'address',
            }],

        }
    }

    // class创建的组件中 必须有rander方法 且显示return一个react对象或者null
    render() {
        return (
            <div className="shopping-list">
                <h1>home</h1>
                <Table dataSource={this.state.dataSource} columns={this.state.columns} />
            </div>
        )
    }
}
export default Home
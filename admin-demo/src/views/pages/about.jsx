import React from 'react';
import { AutoComplete } from 'antd';

import { Checkbox } from 'antd';

const CheckboxGroup = Checkbox.Group;

const plainOptions = ['Apple', 'Pear', 'Orange'];
const defaultCheckedList = ['Apple', 'Orange'];

class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: [],

            checkedList: defaultCheckedList,
            indeterminate: true,
            checkAll: false,
        }
    }
    shouldComponentUpdate (nextProps, nextState) { 
        console.log(nextProps, nextState,"shouldComponentUpdate")
        return true 
    
    }
    handleSearch = (value) => {
        this.setState({
            dataSource: !value ? [] : [
                value,
                value + value,
                value + value + value,
            ],
        });
    }

    onSelect = (value) => {
        console.log('onSelect', value);
    }


    onChange = (checkedList) => {
        this.setState({
            checkedList,
            indeterminate: !!checkedList.length && (checkedList.length < plainOptions.length),
            checkAll: checkedList.length === plainOptions.length,
        });
    }

    onCheckAllChange = (e) => {
        this.setState({
            checkedList: e.target.checked ? plainOptions : [],
            indeterminate: false,
            checkAll: e.target.checked,
        });
    }
    // class创建的组件中 必须有rander方法 且显示return一个react对象或者null
    render() {
        const { dataSource } = this.state;
        return (
            <div className="shopping-list">
                <AutoComplete
                    dataSource={dataSource}
                    style={{ width: 200 }}
                    onSelect={this.onSelect}
                    onSearch={this.handleSearch}
                    placeholder="input here"
                />
                <div style={{height:'40px'}} ></div>
                <div>
                    <div style={{ borderBottom: '1px solid #E9E9E9' }}>
                        <Checkbox
                            indeterminate={this.state.indeterminate}
                            onChange={this.onCheckAllChange}
                            checked={this.state.checkAll}
                        >
                            Check all
                        </Checkbox>
                    </div>
                    <br />
                    <CheckboxGroup options={plainOptions} value={this.state.checkedList} onChange={this.onChange} />
                </div>

            </div>
        )
    }
}
export default About
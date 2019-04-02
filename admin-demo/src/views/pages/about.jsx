import React from 'react';
class About extends React.Component {
    constructor(props) {
        super(props)
    }
    // class创建的组件中 必须有rander方法 且显示return一个react对象或者null
    render() {
        return (
            <div className="shopping-list">
                <h1>About</h1>

            </div>
        )
    }
}
export default About
import { createStore } from 'redux'

import reducer from './reducer'

const initState = {
    path: '1',
    userInfo:{
        name:"admin",
        phone:"17858805259",
    }
}

const store = createStore(reducer, initState)

export default store
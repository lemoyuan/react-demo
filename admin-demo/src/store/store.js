import { createStore } from 'redux'

import reducer from './reducer'

const initState = {
    path: '1'
}

const store = createStore(reducer, initState)

export default store
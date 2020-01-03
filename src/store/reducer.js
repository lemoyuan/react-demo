const routerReducer = (state, action) => {
    if (!state) return {
        path: '1',
        userInfo:{
            name:"admin",
            phone:"17858805259",
        }
    }
    switch (action.type) {
        case 'ROUTER_ACTION':
            return Object.assign({},state, {path: action.path})
        case 'USER_ACTION':
            console.log(action)
            return { ...state, userInfo: action.userInfo }
        default:
            return state
    }
}

export default routerReducer
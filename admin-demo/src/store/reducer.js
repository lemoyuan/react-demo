const routerReducer = (state, action) => {
    if (!state) return {
        path: '1'
    }
    switch (action.type) {
        case 'ROUTER_ACTION':
            console.log(action)
            return { ...state, path: action.path }
        default:
            return state
    }
}

export default routerReducer
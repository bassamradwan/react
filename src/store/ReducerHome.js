const initialState ={
home:[]
}

function homeReducer(state=initialState,action) {
    switch (action.type) {
        case "SET_HOME":
            return{...state,home:action.payload}
            break;
    
        default:
            return state
            break;
    }
}
export default homeReducer
import networkActionTypes from "../actionTypes/Network";

const INITIAL_STATE={
    requestList:[],
    recomendationList:[],
}

const NewtorkReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case networkActionTypes.SET_REQUESTS:
            return{
                ...state,
                requestList:action.payload
            }
        case networkActionTypes.SET_RECOMENDATIONS:
            return{
                ...state,
                recomendationList:action.payload
            }
        case networkActionTypes.GET_RECOMENDATIONS:
        case networkActionTypes.GET_RECOMENDATIONS:
        case networkActionTypes.ACCEPT_A_REQUEST:
        case networkActionTypes.CONNECT_A_RECOMENDATION:
        case networkActionTypes.DELETE_A_RECOMENDATION:
        case networkActionTypes.REJECT_A_REQUEST:
            return{
                ...state,
            }
        default:
            return state
    }
}

export default NewtorkReducer
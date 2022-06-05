import networkActionTypes from "../actionTypes/Network";


export const getAllRequests=()=>({
    type:networkActionTypes.GET_REQUESTS,
})

export const setAllRequest=(list)=>({
    type:networkActionTypes.SET_REQUESTS,
    payload:list
})

export const acceptARequest=(id)=>({
    type:networkActionTypes.ACCEPT_A_REQUEST,
    payload:id
})

export const setRecomendations=(list)=>({
    type:networkActionTypes.SET_RECOMENDATIONS,
    payload:list
})

export const rejectARequest=(id)=>({
    type:networkActionTypes.REJECT_A_REQUEST,
    payload:id
})

export const getRecomendations=()=>({
    type:networkActionTypes.GET_RECOMENDATIONS,
})

export const connectARecomendation=(id)=>({
    type:networkActionTypes.CONNECT_A_RECOMENDATION,
    payload:id
})

export const deleteARecomendation=(id)=>({
    type:networkActionTypes.DELETE_A_RECOMENDATION,
    payload:id
})
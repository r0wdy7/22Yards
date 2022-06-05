import { call, takeLatest ,put, all } from "redux-saga/effects";
import networkActionTypes from "../actionTypes/Network";
import { toast } from "react-toastify";
import { LoaderStart,LoaderStop } from "../actions/Loader";
import {setAllRequest,setRecomendations, getAllRequests} from "../actions/Network" 
import { GetRequestsApi , DeleteARecomendApi ,AcceptARequestApi, ConnectARecomendApi, RejectARequestsApi} from "../../Util/APIS/network";

//Get all requests
function* getRequestAsync(){
    try{
        console.log("Getting Requests")
        const response=yield call(GetRequestsApi)
        console.log("netwok",response)
        yield put(setAllRequest(response.pending))
        yield put(setRecomendations(response.recommend))
    }catch(e){
        toast.error("Something Went wrong")
        console.log("error in getting requests",e)
    }
}

function* getRequestSaga(){
    yield takeLatest(networkActionTypes.GET_REQUESTS,getRequestAsync)
}

//get All recomendations
// function* getRecomendationsAsync(){
//     try{
//         yield put(setRecomendations(["abcd"]))
//         console.log("Getting Recomendations")
//     }catch(e){
//         toast.error("Something Went wrong")
//         console.log("error in getting recomendations",e)
//     }
// }

// function* getRecomendationsSaga(){
//     yield takeLatest(networkActionTypes.GET_RECOMENDATIONS,getRecomendationsAsync)
// }

//accept a request
function* acceptARequestAsync(action){
    try{
        // const response=yield call(AcceptARequestApi,action.payload)
        // console.log(response)
        const response=yield call(AcceptARequestApi,action.payload)
        yield put(LoaderStart())
        yield put(getAllRequests())
        yield put(LoaderStop())
        toast(response.message)
    }catch(e){
        toast.error("Something Went wrong")
        console.log("error in accepting request",e)
    }
}

function* acceptARequestSaga(){
    yield takeLatest(networkActionTypes.ACCEPT_A_REQUEST,acceptARequestAsync)   
}

//reject a request
function* rejectARequestAsync(action){
    try{
        const response=yield call( RejectARequestsApi,action.payload)
        yield put(LoaderStart())
        yield put(getAllRequests())
        yield put(LoaderStop())
        toast(response.message)
    }catch(e){
        toast.error("Something Went wrong")
        console.log("error in rejecting request",e)
    }
}

function* rejectARequestSaga(){
    yield takeLatest(networkActionTypes.REJECT_A_REQUEST,rejectARequestAsync)
}

//connect a recomendation
function* connectARecomAsync(action){
    try{
        
        const response=yield call(ConnectARecomendApi,action.payload)
        console.log("connect recomendation response",response)
        yield put(LoaderStart())
        yield put(getAllRequests())
        yield put(LoaderStop())
        toast(response.message)
    }catch(e){
        toast.error("Something Went wrong")
        console.log("error in connecting recomendations",e)
    }
}

function* connectARecomSaga(){
    yield takeLatest(networkActionTypes.CONNECT_A_RECOMENDATION,connectARecomAsync)
}

//delete a recomendation
function* deleteARecomAsync(action){
    try{
        yield put(LoaderStart())
        const response=yield call(DeleteARecomendApi,action.payload)
        console.log(response)
        if(response.message==="removed from collection"){
             toast.success("We don't show user again in recomendations")
            
        }else{
            toast.error("Something Went wrong")
        }
        yield put(getAllRequests())
        yield put(LoaderStop())
    }catch(e){
        toast.error("Something Went wrong")
        console.log("error in deleteing recomendations",e)
    }
}

function* deleteARecomSaga(){
    yield takeLatest(networkActionTypes.DELETE_A_RECOMENDATION,deleteARecomAsync)
}

export function* networkSaga(){
    yield all([
        call(getRequestSaga),
        // call(getRecomendationsSaga),
        call(acceptARequestSaga),
        call(rejectARequestSaga),
        call(connectARecomSaga),
        call(deleteARecomSaga),
    ])
}
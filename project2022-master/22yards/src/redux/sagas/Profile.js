import {LoaderStart, LoaderStop} from "../actions/Loader" 
import { call, put ,takeLatest, all} from "redux-saga/effects"
import { toast } from "react-toastify"
import profiileActionTypes from "../actionTypes/Profile"
import { GetUserDetails } from "../actions/Auth"
import { UpdateUserDetailsApi } from "../../Util/APIS/profile"

function* EditProfileSaveAsync(action){
    try{
        yield put(LoaderStart())
        console.log("Saving Edited Profile",action.payload)
        const response=yield call(UpdateUserDetailsApi,action.payload)
        yield put(GetUserDetails())
        yield put(LoaderStop())
        toast(response.message)
    }catch(e){
        yield put(LoaderStop())
        toast.error("Something went wrong")
        console.log("error in Saving Profile",e)
    }
}

function* EditProfileSaveSaga(){
    yield takeLatest(profiileActionTypes.EDIT_USER_DATA_SAVE,EditProfileSaveAsync)
}


export function* profileSagas(){
    yield all([
        call(EditProfileSaveSaga),
    ])
}
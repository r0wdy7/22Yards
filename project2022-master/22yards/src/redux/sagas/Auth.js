import AuthActionTypes from "../actionTypes/Auth";
import { call, put, takeLatest ,all} from "redux-saga/effects";
import { toast } from "react-toastify";
import {LoaderStart,LoaderStop} from "../actions/Loader"
import { SignInSuccess,SignInFailure,SignUpSuccess,SignUpFailure,LogoutSuccess,LogoutFailure,GetUserDetails,SetUserDetails } from "../actions/Auth";
import { SignUpApi,SignInApi,LogOutApi,GetUserDetailsApi } from "../../Util/apis";
import Cookies from "js-cookie"


//Login
function* SignInIsStartASync(action){
    try{
        yield put(LoaderStart())
        const response=yield call(SignInApi,action.payload)
        if(response.code===401){
            yield put(SignInFailure())
            yield put(LoaderStop())
            toast.error("Invalid Credentials")
        }else{
            Cookies.set("Token",response.token,{expires: 1})
            yield put(GetUserDetails())
            yield put(SignInSuccess())
            yield put(LoaderStop())
            toast.success("Login Successful")
        }
    }catch(e){
        console.log(e)
        yield put(SignInFailure())
        yield put(LoaderStop())
        toast.error("Something Went Wrong")
    }
}

function* SignInIsStart(){
    yield takeLatest(AuthActionTypes.SIGNIN_START,SignInIsStartASync)
}

//Sign Up
function* SignUpIsStartASync(action){
    try{
        yield put(LoaderStart())
        const response=yield call(SignUpApi,action.payload)
        if(response.code===404){
            yield put(SignUpFailure())
            yield put(LoaderStop())
            toast.error("Credentials already exits")
        }else{
            Cookies.set("Token",response.token,{expires: 1})
            yield put(SignUpSuccess())
            yield put(GetUserDetails())
            yield put(LoaderStop())
            toast.success("Registration Successful")
        }  
    }catch(e){
        yield put(SignUpFailure())
        yield put(LoaderStop())
        toast.error("Something Went Wrong")
    }
}

function* SignUpIsStart(){
    yield takeLatest(AuthActionTypes.SIGNUP_START,SignUpIsStartASync)
}

function* LogOutStartAsync(){
    try{
        yield put(LoaderStart())
        const x=yield call(LogOutApi)
       // console.log(x)
        Cookies.remove("Token")
        yield put(LogoutSuccess())
        yield put(LoaderStop())
        toast.success("LogOut Successful")
    }catch(e){
        // console.log(e)
        yield put(LogoutFailure())
        toast.error("Something went wrong")
        yield put(LoaderStop())
    }
}

function* LogOutIsStart(){
    yield takeLatest(AuthActionTypes.LOGOUT_START,LogOutStartAsync)
}

//Get User Details
function* GetUserDetailsAsync(){
    try{ 
    yield put(LoaderStart())
       const response=yield call(GetUserDetailsApi)
       const x=response.data[0]
        if(!x.bio){
           x.bio=""
        }
        if(!x.profile_image){
           x.profile_image=""
        }
        if(x.bio!==""){
            const y=x.bio.split('\n')
            console.log(y)
            x.bio2=y
        }
       yield put(SetUserDetails(x))
       yield put(LoaderStop())
    }catch(e){
        console.log("errror in getting user details",e)
    }
}

function* GetUserDetailsSaga(){
    yield takeLatest(AuthActionTypes.GET_USER_DETAILS,GetUserDetailsAsync)
}

export function* authSaga() {
    yield all([
      call(SignInIsStart),
      call(SignUpIsStart),
      call(LogOutIsStart),
      call(GetUserDetailsSaga),
    ]);
}
import AuthActionTypes from "../actionTypes/Auth";

const INTIAL_STATE={
    isUserLoggedIn:false,
    isUserRegistered:false,
    loggedInUserDetails:{}
}

const AuthReducer=(state=INTIAL_STATE,action)=>{
    switch(action.type){
        case AuthActionTypes.SIGNIN_START:
        case AuthActionTypes.SIGNUP_START:
        case AuthActionTypes.LOGOUT_START:
            return{
                ...state,
            }
        case AuthActionTypes.SIGNIN_SUCCESSFUL:
            return{
                ...state,
                isUserLoggedIn:true,
            }
        case AuthActionTypes.SIGNUP_SUCCESSFUL:
            return{
                ...state,
                isUserRegistered:true,
                isUserLoggedIn:true,
            }
        case AuthActionTypes.SET_IS_REGISTERED_FALSE:
            return{
                ...state,
                isUserRegistered:false
            }
        case AuthActionTypes.LOGOUT_FAILURE:
            return{
                ...state
            }
        case AuthActionTypes.LOGOUT_SUCCESSFUL:
        case AuthActionTypes.SIGNIN_FAILURE:
        case AuthActionTypes.SIGNUP_FAILURE:
            return{
                ...state,
                isUserLoggedIn:false
            }
        case AuthActionTypes.SET_USER_DETAILS:
            return{
                ...state,
                loggedInUserDetails:action.payload
            }
        default:
            return state
    }
}

export default AuthReducer
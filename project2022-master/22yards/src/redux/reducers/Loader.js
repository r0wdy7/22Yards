import LoaderActionTypes from "../actionTypes/loader";

const INITIAL_STATE={
    isPageLoading:false,
}

const LoaderReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case LoaderActionTypes.SHOW_THE_LOADER:
            return{
                isPageLoading:true
            }
        case LoaderActionTypes.HIDE_THE_LOADER:
            return{
                isPageLoading:false
            }
        default:
            return state;
    }
}

export default LoaderReducer
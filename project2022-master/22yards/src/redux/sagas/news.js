import newsPageActions from "../actionTypes/news";
import { call, put,  takeLatest } from 'redux-saga/effects';
import { APIforNews } from "../../Util/apis";
import { SendNews} from "../actions/news";
import {LoaderStart,LoaderStop} from "../actions/Loader"
import {toast} from "react-toastify"

//GET NEWS SAGA
function* getNewsAsync(action){
    try{
        yield put(LoaderStart())
        const response=yield call(APIforNews,action.payload)
        yield put(LoaderStop())
        if(response.status==='success'){
           toast.success("News Updated");
           yield put(SendNews(response.results))
        }else{
            toast.error("Something went wrong")
        }
    }catch(e){
        toast.error("Something went wrong")
        console.log("error",e)
    }
}


function* getNewsSaga(){
    yield takeLatest(newsPageActions.GET_LATEST_NEWS,getNewsAsync)
}

export default getNewsSaga
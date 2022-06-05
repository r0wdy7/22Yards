import newsPageActions from "../actionTypes/news";

const INITIAL_STATE={
    newsArticles:[],
    isFullNewsOpen:false,
    fullNewsData:{}
}

const newsArticlesReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case newsPageActions.GET_LATEST_NEWS:
            return{
                ...state,
                newsArticles:[]
            }
        case newsPageActions.SEND_LATEST_NEWS:
            return{
                ...state,
                newsArticles:[...action.payload]
            }
        case newsPageActions.OPEN_FULL_NEWS:
            return{
                ...state,
                isFullNewsOpen:true,
                fullNewsData:action.payload
            }
        case newsPageActions.CLOSE_FULL_NEWS:
            return{
                ...state,
                isFullNewsOpen:false,
                fullNewsData:{}
            }
        default:
            return state
    }
}

export default newsArticlesReducer
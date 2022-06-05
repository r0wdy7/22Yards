import newsPageActions from "../actionTypes/news";


export const GetNews=(pageNo)=>({
     type:newsPageActions.GET_LATEST_NEWS,
     payload:pageNo
})

export const SendNews=(newsArticles)=>({
    type:newsPageActions.SEND_LATEST_NEWS,
    payload:newsArticles,
})

export const OpenFullNews=(fullNews)=>({
    type:newsPageActions.OPEN_FULL_NEWS,
    payload:fullNews,
})

export const CloseFullNews=()=>({
    type:newsPageActions.CLOSE_FULL_NEWS
})
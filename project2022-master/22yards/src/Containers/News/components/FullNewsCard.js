import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CloseFullNews } from "../../../redux/actions/news";

export default function FullNewsPage(){
    const fullNewsData=useSelector((state)=>state.newsArticlesReducer.fullNewsData)
    const dispatch=useDispatch()
    console.log("full",fullNewsData)

    function handleRedirectToSource(){
        window.open(fullNewsData.link,"__blank")
    }

    return(
        <div className="full-news-article-modal">
            <div className="full-news-article-container">
                <button onClick={()=>{dispatch(CloseFullNews())}}>Close</button>
                <h4>{fullNewsData.pubDate}</h4>
               { fullNewsData.image_url && <img className="full-news-article-image" src={ fullNewsData.image_url}/>}
               { !fullNewsData.image_url && <img className="full-news-article-image" src={ fullNewsData.randImage}/>}
                <h2>{fullNewsData.title}</h2>
               { fullNewsData.full_description && <p>{fullNewsData.full_description}</p>}
               { !fullNewsData.full_description && fullNewsData.description && <p>{fullNewsData.description}</p>}
               { !fullNewsData.full_description && !fullNewsData.description&& <p>{fullNewsData.content}</p>}
                <h6 className="source-redirect" onClick={handleRedirectToSource}>Redirect to Source</h6>
            </div>
        </div>
    )
}
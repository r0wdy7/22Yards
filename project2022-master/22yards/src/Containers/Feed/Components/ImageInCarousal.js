import React from "react";

function ImageInCarousal(props){
   return(
       <div className="Add-posts-image">
            <img className="button-To-Delete-Image-From-Add-Post" 
                    onClick={()=>{props.onDelete()}}
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAE8klEQVRogdWay49URRTGf6eqM9MDgxvpe3U3zGMn0aUJDyVAXAgSggkToxPjkhWKQiKyIa4gzPBHmDhGIQSN0ejECOMfYCAunO5hVpI7rRszj2bsusdFdw/N9OM+J4RvVV1dder7Uq9zTl14xiF5G9SRkeLG+vq4ESlJvb4DQAuFtVC1OrBr14KUy4/yHC+zAN29e5ez9jhwGNWDwChgejQPFSqiegdj5mwYfivV6kqW8VML2CiVXjEiHwGngB0pzawCN0KYHlhe/j2NgcQCtFSacHANkWNp+vcyC9y2qh9LtVpO0rHXVHcbwTrf/8yJ3EPkOPnuHwFOOJF7zvcvKtgkHSOhnuc71S8ROZSaYjLMWZF3JAiWoxpGClDf31NX/VFgIh9usfHAqr4h1epCv0Z9BajnjTm4C7yYK7X4eGhF9ksQLPZq0FOAep7v4DdgbFuoxUfZiuzrtZy6bmIF4+ALnj55gHEXhrO9NnZXAaHvfwoc2VZaSSByKCyVznf7q0OAlkrjqnqxr8GJCTCxT+BoGNOw2Qcqckl9f7Sj69YKB9NAsaeliQns/DxmZiYfEcZgZmaw8/NRIoac6tWO7u0/Njzv5eYN2xuVCjo7i0xOZhfRJC+Tk+jsLFQqUT1OPvL9ve0VhSfswTmi7oYwJDx7FrOxgUxNYYpFwjNnwLnk5K9fR06fRmdnCT/8EMIwqpdY1XPA+5sVrYKWSsNO5CEwHIuACObKFWRqCr11K5mIdORbWLWqL7S82M0ZcMa8hWo88gCqhOfPY6AxExBPRDbyADudMW8CXz0hADicxAqQXER28q1xD9MhoBGMpDEWT0Re5AGF11rlAjTCQLe2tieVtTgiciQPIDCmIyNFWVqqFQA21tfHbQIfPJEI1VzJN2Gp1UaBPwoARmQ3qlmNNkRcuIAZGGjcE7UaQN7kAag79zw0l5AkOX2isOWeAHInDyCqz0GCkDKZdYHBwce/i8VG3TagsYlFViSPJQSP3YPmsgE2l1Oes6Ai/0JTQKj6d7Yd3ES300Y1u9vRBQVr/4GmgIGhobJbW3NkOYn6HJWpbuz+cBSLi5sCZGmp9p/nLaYO3KPO+bRuRw8olGVpqbYpAEBE7qKaXEDcSypHEQK/tsrtvtDPwAfbQr6FvESozrWKmwIs3HawQlx3Oq17kF3EqoXvOwRIEKzWPe8mMLVt5PMR8XV7RvuJiCyEaQPv0S8q23LOZ3CJO9yOGLbUiUy3V3QQrXveLeBETxPNoD4396AtLnb798NC30zijcLy8tvtFR0CmunE+0RkJqhU8vNtjIGxsSjy61bkpa1pxg5fSJaXKyLyed8BFxZydcwIwyjyiOrlbjnSrmtdwTjP+wE4mg/DjFD9xVarRwU6dnlXb1QgtCLvAoleS7YDCgvW2tPdyENUet33R53qPE8vvf6XFTnQL73eNx6QIFi0IvsU/syfWyQWrerr/chDjIBGguBBQeQAMBfVNkf8ZI15Nep1BhI81CmYsFS6oCKXgKFM9HpjXVQvm2r1ikCsYy75M2tjX1wFTqbp38sscNOKfCJB8CBJx9QEHvn+3mai9RRxHcBOrADfOJFrg0FwP42B7J8a+P5OB8cIwyMqclAaz1K9IjunUBa4g8iche8kCFazjJ//xx7j44OsrIzV6/WSNGdGYaVQKFQZHq7k/bHHM4//AY3Bni9exd+oAAAAAElFTkSuQmCC"></img>
            <img src={props.src} style={{height:"100%",padding:"10px"}} onClick={()=>{props.onClick()}}/>
       </div>
   )
}

export default ImageInCarousal
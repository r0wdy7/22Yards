import React,{useState,useEffect} from "react";
import { useDispatch } from "react-redux";
import { OpenFullNews} from "../../../redux/actions/news";

const randomImageUrls=[
    "https://res.cloudinary.com/du7d2nmbw/image/upload/v1643641004/WhatsApp_Image_2022-01-31_at_12.27.05_PM_2_ye9dzy.jpg",
    "https://res.cloudinary.com/du7d2nmbw/image/upload/v1643641004/WhatsApp_Image_2022-01-31_at_12.27.04_PM_y9zrtn.jpg",
    "https://res.cloudinary.com/du7d2nmbw/image/upload/v1643641004/WhatsApp_Image_2022-01-31_at_12.27.04_PM_1_ygbbod.jpg",
    "https://res.cloudinary.com/du7d2nmbw/image/upload/v1643641004/WhatsApp_Image_2022-01-31_at_12.27.04_PM_2_hd6jex.jpg",
    "https://res.cloudinary.com/du7d2nmbw/image/upload/v1643641005/WhatsApp_Image_2022-01-31_at_12.27.06_PM_1_ezkriz.jpg",
    "https://res.cloudinary.com/du7d2nmbw/image/upload/v1643641005/WhatsApp_Image_2022-01-31_at_12.27.03_PM_axg2ig.jpg",
    "https://res.cloudinary.com/du7d2nmbw/image/upload/v1643641005/WhatsApp_Image_2022-01-31_at_12.27.05_PM_ih3ztp.jpg",
    "https://res.cloudinary.com/du7d2nmbw/image/upload/v1643641005/WhatsApp_Image_2022-01-31_at_12.27.06_PM_2_rf9fxo.jpg",
    "https://res.cloudinary.com/du7d2nmbw/image/upload/v1643641004/WhatsApp_Image_2022-01-31_at_12.27.05_PM_1_nj00pv.jpg",
    "https://res.cloudinary.com/du7d2nmbw/image/upload/v1643641004/WhatsApp_Image_2022-01-31_at_12.27.06_PM_xu7jue.jpg",
    "https://res.cloudinary.com/du7d2nmbw/image/upload/v1643641004/WhatsApp_Image_2022-01-31_at_12.27.04_PM_2_hd6jex.jpg",
]

export default function SingleNewsCard({news}){
    const dispatch=useDispatch()
    const [randImage,setRandImage]=useState("")
    function randNumber(){
        const v=Math.floor(Math.random()*10);
        setRandImage(randomImageUrls[v])
    }
    useEffect(()=>{
       randNumber()
    },[])
   
    return(
        <div className="d-flex mb-3 p-2" style={{width:"100%",backgroundColor:"white",borderRadius:"10px"}}>
            <div style={{width:"100%",marginRight:"100px"}}>
                <h6>{news.pubDate}</h6>
                <h4 style={{fontSize:"13px"}}>{news.title}</h4>
                <p style={{cursor:"pointer",textDecoration:"underline",fontSize:"10px"}}
                   onClick={()=>{
                       news.randImage=randImage
                       dispatch(OpenFullNews(news))
                   }}
                >Read Full Article</p>
            </div>
            <div className="d-flex align-items-center" style={{position:'relative',right:"80px"}}>
                {
                    news.image_url && 
                    <>
                        <img
                            alt="ad-img"
                            className="news-card-image"
                            src="/22YardsLOGO.png"
                        />
                        <img
                            alt="ad-img"
                            className="news-card-image"
                            src={news.image_url}
                        />
                     </>
                }
                {
                    !news.image_url && <img className="news-card-image" src={randImage}/>
                }
            </div>
        </div>
    )
}
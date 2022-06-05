import React,{useEffect, useState} from "react";
import './index.css'
import Loader from "../../Components/Loader/Loader";

export default function LeftFooter(){
    //component initail mount
    // useEffect(()=>{
    //     fetch("https://livescore6.p.rapidapi.com/matches/v2/list-live?Category=cricket", {
    //         "method": "GET",
    //         "headers": {
    //             "x-rapidapi-host": "livescore6.p.rapidapi.com",
    //             "x-rapidapi-key": "3dd309190emshf2e35bd9109ec80p1a2ffbjsned8e98ed908d"
    //         }
    //     })
    //     .then(response => {
    //         console.log(response);
    //     })
    //     .catch(err => {
    //         console.error(err);
    //     });

    // },[])
    return(
        <div className="left-footer mb-3" style={{width:"100%",height:"100%"}}>

        </div>
    )
}
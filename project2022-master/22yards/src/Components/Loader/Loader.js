import React from "react";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";
import { isDesktop } from "react-device-detect";
import '../style.components.css'


export default function Loader(){
    return(
        <div className="loaderContainer d-flex justify-content-center align-items-center">
            {!isDesktop && <img src="/LogoRed.jpeg" style={{width:"60vw"}}/>}
            { isDesktop && <img src="/LogoRed.jpeg" className="loader22yardsimage" style={{width:"40vw"}}/>}
            <ClipLoader  size={35} color={"red"}/>
        </div>
    )
}
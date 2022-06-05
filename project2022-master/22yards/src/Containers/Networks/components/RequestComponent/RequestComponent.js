import React from "react";
import { acceptARequest,rejectARequest } from "../../../../redux/actions/Network";
import {useDispatch} from "react-redux"
import { Link } from "react-router-dom";
import { LoaderStart, LoaderStop } from "../../../../redux/actions/Loader";
import { toast } from "react-toastify";
import { AcceptARequestApi, RejectARequestsApi } from "../../../../Util/APIS/network";

export default function RequestComponent({userDetails,handleAcceptOrDeclineARequest}){
    const dispatch=useDispatch()

    async function handleAcceptARequest(){
        // dispatch(acceptARequest(userDetails.user_id))
      dispatch(LoaderStart())
      const res=await AcceptARequestApi(userDetails.user_id)
      dispatch(LoaderStop())
      console.log("response",res.message)
      if(res.message==="Not Found"){
        toast.error("Something Went Wrong")
      }else{
        handleAcceptOrDeclineARequest(userDetails.user_id)
        toast.success("Connection Successful")
      }

    }

    async function handleRejectARequest(){
        // dispatch(rejectARequest(userDetails.user_id))
       dispatch(LoaderStart())
      const res=await RejectARequestsApi(userDetails.user_id)
      dispatch(LoaderStop())
      console.log("response",res.message)
      if(res.message==="Not Found"){
        toast.error("Something Went Wrong")
      }else{
        handleAcceptOrDeclineARequest(userDetails.user_id)
        toast.success("Rejected A Request")
      }

    }

    var height1;
    height1 = Math.floor(Math.random()*(400)+100);
    var link1 = "https://picsum.photos/"+height1+"/"+height1;
    return(
        <div className={`request-component-card`} >
            <img
                className='request-card-img'
                src="/22YardsLOGO.png"
            />
            <img
                className='request-card-img'
                src={link1}
            />
            <div className="request-info">
                <Link to={{
                    pathname:`/profile/${userDetails.username}`,
                    }} 
                    style={{textDecoration:"none",color:"black"}}
                >
                  <h6>{userDetails.username}</h6>
                </Link>
                <div className="d-flex mt-1">
                    <button className="request-accept-button" onClick={handleAcceptARequest}>Accept</button>
                    <button className="request-reject-button" onClick={handleRejectARequest}>Decline</button>
                </div>
            </div>
        </div>
    )
}
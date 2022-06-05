import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { EditProfileStart } from "../../redux/actions/Profile";
import { acceptARequest, rejectARequest, connectARecomendation } from "../../redux/actions/Network";
import { AcceptARequestApi, RejectARequestsApi, ConnectARecomendApi} from "../../Util/APIS/network"
import { toast } from "react-toastify";
import { LoaderStart, LoaderStop } from "../../redux/actions/Loader";
import {DeleteASentRequestApi, DeleteAConnectionApi} from "../../Util/APIS/profile"

function Mainprofile({profileDetails,user}){
    const dispatch=useDispatch()
    //const ref1=useRef(null)
    const profilePicReference=useRef(null)
    const loggedInUserDetails=useSelector((state)=>state.authReducer.loggedInUserDetails);
    const [profile_image,setProfilePic]=useState(profileDetails.profile_image)
    const [bio,setBioContent]=useState(profileDetails.bio)
    // const [isPenChoosed,setIsPenChoosed]=useState(false)
    const [is_fan,setIsFan]=useState(0)
    const [is_celeb,setIsCeleb]=useState(0)
    const [is_friend,setIsFriend]=useState(0)
    

    useEffect(()=>{
      setBioContent(profileDetails.bio)
      setIsCeleb(user.is_celeb)
      setIsFan(user.is_fan)
      setIsFriend(user.is_friend)
      setProfilePic(profileDetails.profile_image)
    },[user])
    
    // useEffect(()=>{
    //   if(isPenChoosed){
    //      ref1.current.focus()
    //   }
     
    // },[isPenChoosed])
    
    // useEffect(async()=>{
    //  if(profile_image!==profileDetails.profile_image || bio!==profileDetails.bio){
    //      dispatch(EditProfileStart())
    //      let profile_image1=profileDetails.profile_image
    //      if(profile_image!==profileDetails.profile_image){
    //         profile_image1=await ImageUploader(profile_image)
    //      }
    //      const x={profile_image:profile_image1,bio}
    //      console.log(x,profile_image!==profileDetails.profile_image,bio===profileDetails.bio)
    //      dispatch(SeteditedUserDetails(x))
    //  }
    // },[profile_image,bio])

    // function handleEditBio(){
    //   setIsPenChoosed(true)
    // }

    // function handleOnChange(e){
    //   if(e.target.files[0]) {
    //     fileToDataUri(e.target.files[0])
    //     .then(dataUri => {
    //       setProfilePic(dataUri)
    //     })
    //   }
    // }

    async function handleAcceptARequest(){
      // dispatch(acceptARequest(profileDetails.user_id))
      dispatch(LoaderStart())
      const res=await AcceptARequestApi(profileDetails.user_id)
      dispatch(LoaderStop())
      console.log("response",res.message)
      if(res.message==="Not Found"){
        toast.error("Something Went Wrong")
      }else{
        setIsFriend(1)
        setIsFan(0)
        toast.success("Connected Successfully")
      }
    }

     async function handleRejectARequest(){
        // dispatch(rejectARequest(profileDetails.user_id))
        dispatch(LoaderStart())
        const res=await RejectARequestsApi(profileDetails.user_id)
        dispatch(LoaderStop())
        console.log("response",res.message)
        if(res.message==="Not Found"){
          toast.error("Something Went Wrong")
        }else{
          setIsFan(0)
          toast.success("Request Declined")
        }
        
     }

     

    async function handleConnectToRecommendation(){
      //  dispatch(connectARecomendation(profileDetails.user_id))
      dispatch(LoaderStart())
      const res=await ConnectARecomendApi(profileDetails.user_id)
      dispatch(LoaderStop())
      console.log("response",res.message)
      if(res.message==="Not Found"){
        toast.error("Something Went Wrong")
      }else{
        setIsCeleb(1)
        console.log("ygjuy")
        toast.success("Connection Request Sent")
      }
    }

    
    // function handleProfileChange(){
    //   const x=profilePicReference.current.click()
    // }
    
    function handlEditProfiletrigger(){
        dispatch(EditProfileStart())
    }

    async function handleCancelRequest(){
      dispatch(LoaderStart())
      const res=await DeleteASentRequestApi(profileDetails.user_id)
      dispatch(LoaderStop())
      console.log("response",res.message)
      if(res.message==="Not Found"){
        toast.error("Something Went Wrong")
      }else{
        setIsCeleb(0)
        toast.success("Request Cancelled")
      }
    }

    async function handleDeleteConnection(){
      dispatch(LoaderStart())
      const res=await DeleteAConnectionApi(profileDetails.user_id)
      dispatch(LoaderStop())
      console.log("response",res.message)
      if(res.message==="Not Found"){
        toast.error("Something Went Wrong")
      }else{
        setIsFriend(0)
        toast.success("Disconnected Successfully")
      }
    }

    return (
      <>
        {console.log("main",profileDetails)}
        {/* {console.log("profileDetails",is_fan," ",is_celeb," ",is_friend," ",loggedInUserDetails.username===profileDetails.username)} */}
        <div className="profile-main-container">
            <div className='profile-main-card'>
                <img className="profile-main-card-bg-img" src="/coverPhoto.jpeg" />
                <img className="profile-main-card-profile-img" src="/22YardsLOGO.png" />
                { profile_image!=="" && <img className="profile-main-card-profile-img" src={profile_image}/> }
                {   loggedInUserDetails.username!==profileDetails.username &&
                    <div className="d-flex justify-content-end">
                       { is_fan===0 && is_celeb===0 && is_friend===0 && 
                         <button className="btn btn-primary m-2" onClick={handleConnectToRecommendation}>Connect</button>
                       }
                       { is_fan===0 && is_celeb===0 && is_friend===1 && 
                         <button className="btn btn-primary m-2" onClick={handleDeleteConnection}>Disconnect</button>
                       }
                       { is_fan===1 &&  is_celeb===0 && is_friend===0 && 
                         <button className="btn btn-primary m-2" onClick={handleAcceptARequest}>Accept</button>
                       }
                       { is_fan===1 && is_celeb===0 && is_friend===0 && 
                         <button className="btn btn-primary m-2" onClick={handleRejectARequest}>Decline</button>
                       }
                       { is_fan===0 && is_celeb===1 && is_friend===0 && 
                         <button className="btn btn-primary m-2" onClick={handleCancelRequest}>Cancel Request</button>
                       }
                    </div>
                }
                <div className="profile-main-card-body">
                  <h4>{profileDetails.username}</h4>
                  {/* Email */}
                  {
                     loggedInUserDetails.username===profileDetails.username &&
                     <>
                       <h6>{profileDetails.email}<span className="only-visible-to-you">(Only Visible to you)</span></h6>
                     </>
                  }
                  {/* { 
                    <div contentEditable={isPenChoosed} ref={ref1} 
                         onInput={(e)=>{setBioContent(e.currentTarget.textContent)}} 
                         suppressContentEditableWarning={true}
                    >
                      {profileDetails.bio}
                    </div>
                  }  */}
                  {
                     profileDetails.bio2 && 
                     profileDetails.bio2.map((each,index)=>{
                        return(
                          <>
                            <p key={index}>{each}</p>
                          </>
                        )
                     })
                  }
                  { loggedInUserDetails.username===profileDetails.username && 
                    <div className='profile-main-btn-container'> 
                      <button onClick={handlEditProfiletrigger}> Edit Profile</button>
                    </div>
                  }
                  {/* <input type={"file"} accept="image/*"onChange={(e)=>handleOnChange(e)} style={{display:"none"}} ref={profilePicReference}/> */}
                </div>
           </div> 
       </div>
       </>
    );
}
export default Mainprofile;
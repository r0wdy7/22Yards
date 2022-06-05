import './index.css';
import Mainprofile from './mainProfile';
import {useLocation} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Posts from '../Posts';
import Connections from '../Connections';
import {PostBody} from "../../Util/util"
import { BASE_URL } from '../../Util/util';
import EditProfileComponent from './Components/EditProfileComponent';
import {LoaderStart,LoaderStop} from "../../redux/actions/Loader"

function Profile(){
    const location=useLocation()
    const dispatch=useDispatch()
    const [profileDetailsTemp,setTempProfileDetails]=useState(null)
    const [activeTab,setActiveTab]=useState("Posts");
    const isProfileInEditMode=useSelector((state)=>state.profileReducer.isProfileInEditMode);
    const loggedInUserDetails=useSelector((state)=>state.authReducer.loggedInUserDetails);
    
    useEffect(async()=>{
        //API CALL FOR PROFILEDETAILS
        dispatch(LoaderStart())
        console.log("user",location.pathname.slice(9))
        const options=PostBody({view_user:location.pathname.slice(9)})
        const res=await fetch(`${BASE_URL}/profile/view-profile`,options)
        const response=await res.json()
        setTempProfileDetails(response)
        dispatch(LoaderStop())
    },[location.pathname.slice(9)])
    return (
        <>
         {console.log("profile props",profileDetailsTemp,loggedInUserDetails)}
         { profileDetailsTemp && 
            <div className="profile-mid-section">
                {   profileDetailsTemp &&  
                    !isProfileInEditMode &&  
                    profileDetailsTemp.data[0].username!==loggedInUserDetails.username &&
                    <Mainprofile  
                        profileDetails={profileDetailsTemp.data[0]} 
                        user={profileDetailsTemp} 
                        />
                }
                {
                     profileDetailsTemp &&  
                     !isProfileInEditMode &&  
                     profileDetailsTemp.data[0].username===loggedInUserDetails.username &&
                     <Mainprofile  
                         profileDetails={loggedInUserDetails} 
                         user={profileDetailsTemp} 
                      />
                }
                {
                    profileDetailsTemp && 
                    isProfileInEditMode && 
                    profileDetailsTemp.data[0].username!==loggedInUserDetails.username &&
                    <EditProfileComponent profileDetails={profileDetailsTemp.data[0]} /> 
                }
                {
                    profileDetailsTemp && 
                    isProfileInEditMode && 
                    profileDetailsTemp.data[0].username===loggedInUserDetails.username &&
                    <EditProfileComponent profileDetails={loggedInUserDetails} /> 
                }
                {   profileDetailsTemp.connectionsList && 
                    <div className='profile-links-container d-flex mb-2'>
                        <h5 onClick={()=>{setActiveTab("Posts")}} className="profile-links">Posts</h5>
                        <h5 onClick={()=>{setActiveTab("Connections")}} className="profile-links">Connections({profileDetailsTemp.connectionsList.length})</h5>
                    </div>
                }
                {   activeTab==="Posts" &&
                    <Posts/>
                }
                {   activeTab==="Connections" && profileDetailsTemp.connectionsList &&
                    <Connections connections={profileDetailsTemp.connectionsList}/>   
                }
            </div>
         }
         </>
    );
}

export default Profile
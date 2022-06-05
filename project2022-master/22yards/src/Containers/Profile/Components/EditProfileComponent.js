import { useEffect, useRef, useState , CSSProperties} from "react"
import { useDispatch } from "react-redux";
import {  SeteditedUserDetails } from "../../../redux/actions/Profile";
import { IPLTeamLogos } from "../../../Util/util";

const fileToDataUri = (file) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      resolve(event.target.result)
    };
    reader.readAsDataURL(file);
})

function EditProfileComponent({profileDetails}){
    const contentableDivRef=useRef(null)
    const imageUploadDpRef=useRef(null)
    const dispatch=useDispatch()
    const [profile_image,setProfileImage]=useState("")
    const [bioLength,setBioLength]=useState(0)
    const [bio,setBio]=useState("")
    const [textAreaHeight, setTextAreaHeight] = useState("auto");
	const [parentHeight, setParentHeight] = useState("auto");

    useEffect(()=>{
        if(profileDetails.profile_image!==null){
            setProfileImage(profileDetails.profile_image)
        }else{
            setProfileImage("/22YardsLOGO.png")
        }
        if(profileDetails.bio!==null){
            setBio(profileDetails.bio)
            setBioLength(profileDetails.bio.length)
        }
    },[])

    useEffect(()=>{
        const edited={profile_image,bio}
        console.log(edited)
        dispatch(SeteditedUserDetails(edited))
    },[profile_image])

    useEffect(()=>{
       setBioLength(bio.length)
       setParentHeight(`${contentableDivRef.current.scrollHeight}px`);
	   setTextAreaHeight(`${contentableDivRef.current.scrollHeight}px`);
       const edited={profile_image,bio}
       dispatch(SeteditedUserDetails(edited))
    },[bio])

    function handleBioChange(e){
        setTextAreaHeight("auto");
		setParentHeight(`${contentableDivRef.current.scrollHeight}px`);
        setBio(e.target.value);
    }

    function handleImageChange(e){
        if(e.target.files[0]) {
            fileToDataUri(e.target.files[0])
            .then(dataUri => {
                setProfileImage(dataUri)
            })
        }
    }

    function handleChooseIplLogoAsProfilePic(url){
        setProfileImage(url)
        console.log(IPLTeamLogos.includes(url))
    }
    
    function toggleImageUploadForDP(){
        imageUploadDpRef.current.click()
    }

    function deleteprofileImage(){
        setProfileImage("https://res.cloudinary.com/dhz8n0ka8/image/upload/v1646731518/22YardsLOGO_edjjo1.png")
    }

    return(
        <div className="profile-main-card">
            {console.log("editmode",bio)}
           <div className="editing-container">
               <div className="d-flex flex-column align-items-center mb-2">
                   <img src={profile_image} className="editprofile-main-card-profile-img"/>
               </div>
               <div className="d-flex justify-content-center mb-4">
                  <img onClick={toggleImageUploadForDP} className="edit-image-icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAABmJLR0QA/wD/AP+gvaeTAAADnUlEQVR4nO2cP2sUQRiHnxhFLAQLCwujYmHAXuwFEYmIEcFGsBMLEewttPArCOIniATiF7Cx1MLSwkLwLiASxUTBP1HP4lJcLjN779zO7L17+T3wa5Kd2bl5bnbvnb0EhBBCCCGEEEII4ZsFoAv0lG3pABdrzKuJmcDPOsDR0iduKR3gWMkThIT0Sp5wCgjNWTb2lOxcpLPXcEzRd0QLaPSKoRXiDAlxhoQ4Q0KcISHO2C1C5oBlYGMrK8B8pr6LV/TDJ2g7c8Bndr6uL1u/G8Wo+Qhts3yoPeqEAYzLNfrvni5wOWO/o1gmvj/1zNB+HCFZ38glOr4L/B3o8xdwIVPfo9ggPmnrhvZTJWQGeBToswd8B87W7N9ClZCvhvbW+XAvZBZ4GuhvMGvA6TqDNbBScf4lQ/upEHIAeB7oK/acoeSW9jz9G3jozWB5zNB6IYeAl4F+qvIWOFx34BXM0b+Br29lCfszn1YLOQK8CfRhyWvgYP3hZ6e1Qk4C7wLtU/IC2J/jRWSklULOAJ8CbcfJEr52EHIJCd07TRV9qpDzwLdAuzp5bBloQ5QS0sNY0acIuQr8iJysbh5aBtsAJYWYrkDWBnfYXn2XyD3LgAvjXsgM8KDiBDnzD7hpGXRBcglJPc7UYBZ4EjimZH7TwBfUKnArJKX6zp0c+16XgPf0P91cSWjnUsg41Xfu1Nn3WgB+DvT1B7hhbOtOSJ3qO3e6wAnLixhgWEaqFHdC3gd+Nsmk7Hst0r8HxfraBK4nzkdTx0UbeMwrRu97xVZG6kqREGOq9r2sMixSJMSYVeB4YPyjLlOxxC5fEmLIR8KfuFJXxnBCK0VCRqSUjJgUCalIaRkhKRISSVMyhqVISCCrwKnAWMe9gVuzmTCBu0bIGpOREYt13uoeF20w6dwPjHFSMooL8fTs2soi/efu+yY9kKaY9IoYzhpwjv5WyW0mtzIaWSH6O/V0Yn+VPDxvYx3XxkvWVCMhzpAQZ0iIMyTEGRLiDAlxhoQ4Q0KcISHOkBBnSIgzJMQZEuIMCXFGSEi38VG0h07pE4SE3EJSQnToz01Rdvv/5M2JnhhOIxLiDAlxhuV/v8ewXjNFAlohzqizQobR97kyoBXijDpCVDzGGbuiryNEFX2YWhW9Phk1jyr1NiEhzpAQZ+SsQ2Kook9AK8QZTayQYVTRV6AV4owmhKh4jLOjom9CiCr6MI08oxdCCCGEEEIIIUQd/gOQUj5tMzJibwAAAABJRU5ErkJggg=="/>
                  <img onClick={deleteprofileImage} className="edit-image-icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAABmJLR0QA/wD/AP+gvaeTAAADCklEQVR4nO3dwWoTURSH8Q8sVmpwL3QvuLBZ1fpIgu1WXBnwBdq6rY/gxkXxDaxIpe9QLe4jNK7iYjJQmmTmnpk7d86d/D+4m6Y9M/kxzExLkoJSSimllMe2+t6BTWgCfAUe9b0jQ24CzBdL2B11F1nYHbUKWdiR2wLOWQ89Xzy+3dcODqmHwBeqsXVkR0rYCRN2wrapP2dv0voLXABHdHCdEvbqdQXstnBdmbDXYzc6sh9UPCbs1eswwHWpz8CziseFvby+BbguNQX+AM8rvifkbmST1jTAdanyh4VtW+bu/rCwE0ELOyH0HLhhmBfIW+AY2AceL9ZL4ASYGWeZWzdoaNjXwIuK57O3+J7k0EPCvqUauWyP8CPbXN3AIWAfGzxOA2eaCxmaO/a+weMgcKa50J3N+W5kZPAYBc40Z9nhXLEt0E8CZ5qz7nSOp5GsTh05Y58YPD4GzjTXdOdzwp5R3LrVNQb+Bc401+YJ5IR9TTX2GPhlmGeu7RPICXtGcZ98QHGBHAGvKE4XoUdyb9Bz4JLqV6B6wo61zLXd4BnFH2fqGhq2uTYbmxi3NSRsc0039L7JxvD7S41L6KbIZUPANpcauSx3bHOW4dZzcl1tz9m/gXcU98fl7dp48bWbFnN7hY6NXNYU+wzYqZi7A3xqMLdX6K6Qy6zYlv2pejeDO+gUhWJ/aDC7C2xzXqCh29dnv62Zu1HQkA+2OW/QkAe2OY/Q4B/bnFdo8I1tzjM0+MU25x0afGKbywEa/GGbywUafGGbywka/GCbyw0afGCbyxEausUW9L26whb0irrAFvSaYmMLuqKY2IKuKRa2oAOKgS3owNpiC9pQG+zeoL2uPt9TY65vrFyxzfUNlSu2uWnPSDliN/pglO8OkGKtVG/zuAhwXerIAVBu2G8CXFdu+MoBUC7YPylOQ43aRdgh6xJ4GiRas+FDio8aG8oFMhb2D+A1LY5kpQ++TZqwEybshIWcs8/R/6mJUt2RHetdaYr12ELuoPvYQu6wElvICdKFTymllFIO+w9ANIif4OESCAAAAABJRU5ErkJggg=="/>
               </div>
               <h6>Suggestions for Profile Image</h6>
               <div className="ipl-team-logo-div">
                    {
                        IPLTeamLogos.map((each,index)=>{
                            return(
                                <img src={each} key={index} className="ipl-team-logo-image" onClick={()=>{handleChooseIplLogoAsProfilePic(each)}}/>
                            )
                        })
                    }
               </div>
               <h6>Bio</h6>
                <div style={{
			      	minHeight: parentHeight,
			    }}>
                   <textarea  
                       ref={contentableDivRef}
                       rows={1}
                       style={{
                           height: textAreaHeight,
                       }}
                       defaultValue={bio}
                       maxLength="100"
                       className="editing-bio-div"
                       onChange={handleBioChange}   
                    >
                        
                    </textarea>
                </div>
                <div className="d-flex justify-content-end">
                    <p>{bioLength}/100</p>
                </div>
           </div>
           <input type={"file"} accept="image/*" style={{display:"none"}} onChange={handleImageChange} ref={imageUploadDpRef}/>
        </div>
    )
}

export default EditProfileComponent
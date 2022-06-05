import 'bootstrap/dist/css/bootstrap.min.css';
import './EachNetworkCard.css'
import { connectARecomendation, deleteARecomendation } from "../../../../redux/actions/Network"
import {useDispatch} from "react-redux"
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { DeleteARecomendApi, ConnectARecomendApi  } from '../../../../Util/APIS/network';
import { LoaderStart, LoaderStop } from '../../../../redux/actions/Loader';
import { toast } from 'react-toastify';

export default function EachNetworkCard({userDetails,handleRemoveARecomend}){
    const dispatch=useDispatch()
    const [imageLoading,setImageLoading]=useState(true)
    const [isRequestSent,setIsrequestSent]=useState(false)

    var height;
    height = Math.floor(Math.random()*(400)+100);
    var link = "https://picsum.photos/"+height+"/"+height;

    async function handleDeleteRecomendation(){
      //  dispatch(deleteARecomendation(userDetails.user_id))
      dispatch(LoaderStart())
      const res=await DeleteARecomendApi(userDetails.user_id)
      dispatch(LoaderStop())
      console.log("response",res.message)
      if(res.message==="Not Found"){
        toast.error("Something Went Wrong")
      }else{
        handleRemoveARecomend(userDetails.user_id)
        toast.success("Connection Request Sent")
      }
    }

    function onLoad(){
        setImageLoading(false)
    }

    async function handleConnectToRecommendation(){
      // dispatch(connectARecomendation(userDetails.user_id))
      dispatch(LoaderStart())
      const res=await ConnectARecomendApi(userDetails.user_id)
      dispatch(LoaderStop())
      console.log("response",res.message)
      if(res.message==="Not Found"){
        toast.error("Something Went Wrong")
      }else{
        handleRemoveARecomend(userDetails.user_id)
        toast.success("Connection Request Sent")
      }
     
    }

    return(
    <div className='network-card'>
        <button className='delete-recomendation-button' onClick={handleDeleteRecomendation}>
          <img style={{height:"25px"}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAEkklEQVRoge2aTYxURRDHf6MrO+uC7AwMcFMiB1cQOZmokYOfCygsXgyKiQcIGkUQuRgDeDZ60LiJ8UTiwcSjCSFIQPEroogQE3ERP+IiiUZjAFnZrPg8VHWqmbx5816/np098E8mmZmqrqp5XV1fPXAF0wuViLLqwHLgTuBm4EZgHtCv9AvAb8CPwLfAJ8BHwF8RbQhGFXgceB+4BCQFX/8C+4D1QO8U2w5AH/A8cMYz6iJwENgBDAODQA24Rl81/W4Y2Al8oGvc+l+BbcjDmRKsAn7wDPgS2ADMDpA1AGwEjnjyTgEroljaAlXgTU/hV8D9EeUPAV978kfowO4sQAxPkEO7Gbg6thKVuQUYx3Z7fizhC5HtToATwJJYgjOwFBhVnd+rDaXQ8AR+AcwtK7AAakiITpAzuSBUUBVzp8+wfDCV6Ac+x9ws6My4g30CSXbdwhzMK0aKLl6FHeypOBPtsBQLAEN5F/VheWJzZ+wKwlbs8Odyse1YnuhEiA1FD3AMsW1rO+ZepFRIgPsKKFmDJbKfgJk51jztrdmdU89K5T9Dm11Zj0WIonjHM+zVNrw3AOeV9xekVMmDChZJH81i3K9MG3IK9jEAnNb1l4A7MozZp3z/AQ8U1LNJ1+5txVBHyuqLhBWAAKuxXfkGmJHC86TH83qAjhowAUzSws61KvxAgHAfuzFDdzXRrgfOYfmpL1DHIZXxUBrxFSXuCBTuMACMqawJYLF+X8FcdxK4rYSOl1TOy2nEPUpcXUKBw72I/yfAYSSMO99O1JAycN7zXhrxpBIHSypxeAsz/A3grL4/gnSMZbBYZX2XRvxTibHqqn6s/Pfb4Rglz1yV93sacUKJaZEmFCu4/IdsjyS3F3swAFwVSXAr3NP0+aYO6wPiu9btSF5qHgGtjCC7QYZrxTzs12I9xAUkyrjRz2kkqZVB5mF34XdNSSUAr2E74FqBF7zv3i4p/2Eywq9LiDtLKlmOTR0/xM5hD9L3ux8zXEJHZkIcVuLBEgr6kcYnAf4GFjXRB4F/MP+eF6jHlSgPphFrWNGYt6xuxgj2xJ9qwfOix/NugI46VjRe14rJldcbAxTcjZUlB2g96W92sUcK6nHV854spsewMqIIZgE/69qzSJWbhVuwBPwH+WdWFeCorluXxVjFWt0iDc8TSGW7H3kYefCMt+a5nGvcdGeMHNcQ25T5KNNv+HAcse3ZPAuqWLG3pXN2FYZ7wKMUuBRyxd44MhzrNpZhYbvwVYYLpaPI2LJbaGC5KaTHp4qMhRJkkNyNIfZMpMN0nWbwPWMDKczctUIjhnU5UQc+xa7jSl/4LMS2dhS4tazAHFjm6TyJDPSiYD7mZuPI7LUnlnAPPUh0cgf7MOH1WEtUubyWOka829cKkuxcnnAHu6N370PYtrup/SbCmqU6Uju5ssO5Uszb4kxUEfdys143jDuETBfXIl3cHGSYMUPfL0Gaol3KO+GtH0Mydlf+AdGLTMX3kt6ft3tNIlXsOkr+gJh/qpmNdId3IQ3UIiRcz1L6eaSZOoWE9I+RXTkX0YYrmDb4H/aneVAZv2cZAAAAAElFTkSuQmCC"/>
        </button>
        <img
              className='netwrok-card-image'
              src="/22YardsLOGO.png"
          />
        { 
          <img 
            src={link} 
            className='netwrok-card-image'
            style={{ display: imageLoading ? "none" : "block" }}
            onLoad={onLoad}
          />
        }
        <div className='networkcard-header'></div>
        <div className='network-card-info '>
            <Link to={{
                  pathname:`/profile/${userDetails.username}`,
                  }} 
                  style={{textDecoration:"none",color:"black"}}
            >
              <h6>{userDetails.username}</h6>
            </Link>
            <p>ITS ABOUT ME</p>
            <p>{height} no of mutuals</p>
            <button className='btn btn-primary mb-2' onClick={handleConnectToRecommendation}>Connect</button>
       </div>
    </div>
    )
}
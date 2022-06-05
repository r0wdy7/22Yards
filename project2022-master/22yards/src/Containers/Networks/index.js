import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import EachNetworkCard from './components/EachNetwokCard/EachNetworkCard';
import RequstComponent from './components/RequestComponent/RequestComponent'
import { useEffect, useRef, useState } from 'react';
import { getAllRequests, setRecomendations, setAllRequest } from '../../redux/actions/Network';
import {useDispatch,useSelector} from "react-redux"
import Cookies from 'js-cookie';
import {SignInSuccess, SignInFailure, SetUserDetails} from "../../redux/actions/Auth"
import { decodeToken } from "react-jwt";


function Networks(){
  const ref=useRef(null);
  const dispatch=useDispatch()
  const requestList1=useSelector((state)=>state.newtorkReducer.requestList)
  const recomendationList1=useSelector((state)=>state.newtorkReducer.recomendationList)
  const [showRequests,setShowRequest]=useState(false)
  const [recomendationList,setRecomedList]=useState([])
  const [requestList,setRequestList]=useState([])

  useEffect(()=>{
     setRecomedList(recomendationList1)
     setRequestList(requestList1)
  })
  useEffect(()=>{
    dispatch(getAllRequests())
  },[])

  

  function handleRemoveARecomend(id){
     const x=recomendationList.filter((each)=>each.user_id!==id)
     console.log("id",id,x) 
     dispatch(setRecomendations(x))
  }

  function handleAcceptOrDeclineARequest(id){
    const x=requestList.filter((each)=>each.user_id!==id)
    console.log("id",id,x) 
    dispatch(setAllRequest(x))
  }

  return (
    <div className='d-flex flex-column' style={{width:"100%"}}>
        <div className='requests-section1' ref={ref}>
            <div className='d-flex justify-content-between align-items-center mb-2' style={{width:"100%",paddingLeft:"15px",paddingRight:'15px'}}>
                <h4>Invitations</h4>
                {/* {!showRequests && <img style={{height:"20px",cursor:"pointer"}} onClick={()=>{setShowRequest(!showRequests)}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAB90lEQVRoge3YvWoUURgG4CebGMVKk4jYiYiIQRAkVyCIEC9AbLQUItrkLkKQgAbEUrAURAULJdfgT2JcELst1ChoEY2/xezAsuzu/OzOnFPkhRe2Wp6PGT7OGXYTR2ZwBy38i7wt3MZ0ip9GMwJY0W5iahxLuDD4AUWZGewfkzySI4ExZdMawzb2hZaUzHYD66EVQ2SjgbuhFUPkHuzBe+G3StF+wGQ6ydUIQEV7pfNRjONtBKi8bWJCVy5HAMvbS914aOB1BLisvmxbe2Y+AmBWM08NzyNA9utaFh7O4E8E2O7+xdk8A8CDCMDdvZ8XD0fxIwJ02p84VmQAWI4AnnapKB4O4FME+I9tS6ksRDDAtbJ4kiPGq4D4dT2ODEVzLuAA54fFp3kcAP9oVHg4LllldeF3cGKUA8CtGgdYHjUeDqpnrW5hqooB4HoNAyxUhSdZq1XeGTYkd/RKU+Vare0L4dMK8E/qwsNJyaobFX6n/Z+1ZmUE8LQrNduRrNXPJbDd/aLjW3/duZkDmNUbtas7MoE3PVB5u6mGtZmVi8oPMB/A2zPPFMe/CCLtk1P4JT/+N04HkQ7IqvwDrAYyDswhfJWN/4bDgYyZWZQ9wGIwXY5M4p3++Cb2BtPlzBy+6/3qzAV0FcosHkpuV1vt37NBRbupKP8BNUAY48m1ZiIAAAAASUVORK5CYII="/>} */}
                {!showRequests && <img style={{height:"20px",cursor:"pointer"}} onClick={()=>{setShowRequest(!showRequests)}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAA+ElEQVRIie3OsSuFURjH8c+VImQwSFIGpWRQJmUy3M1kstlMbMq/YDCajAaj3SCD7U5KSlkuRUmJDCK8lufUSeFe9x3fbz3DOb/f8z2HiooyuEKBJ9RL8NXDVaAJ83iMi1csdSBfxEu4nrGQglncR/COlX/Il/EWjgfMfS9M4SYKn1hvQ76Kj9i9w8xPxUlcZ49stCBfi26BW0z/tTCOy1gosPVLdzPrNTHRwofACM6y5R3UsryG7Sy/wFir8sQwTjPJHrrRhd3s/hyj7coTQ2hksv2YdG5EpyP6cZRJ05xgsFN5og+HmfwYA2XJEz04iOktW15R8TNfk9ZIfo6LlycAAAAASUVORK5CYII="/>}
                {showRequests && <img style={{height:"20px",cursor:"pointer"}} onClick={()=>{setShowRequest(!showRequests)}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAACG0lEQVRoge3YT4jMYRzH8ddYG5H8jVYpB0IocZDigORCioOUpBy4sZd1c3bgoDg4cFBKOWlvXBwokaSWbDlskY3Wv5a0rF2HmWGM+c7s7szsbzbPu76X+T3P5/t+6vd7fr9nSCQSiUQikUhMZfYVakrThdFCncnYZcKc9mcRxTqbqdE4yeGcfxdRrIuFMS1NDhfEiyjWZUzLyLEmbbiq9iKKdR3TMzGtQjtuGvsiinULMzLwrchMdItlrxQqut5dyMiUWbgtlrwk/yzkcL7KuLuYM8nuv5mLe1XkKm21lbbkYj3EgqZblzEfD6pIVXv5dWEkmPcYi5pmXcYSPA1ERnByDBnH8TPIeI6lDbcuowPPAoFhHB1H1iF8D7J6saxh1mUsx8ug8RAOTCBzL74FmX1YUbd1GavxKmj4FbvryN6OwSC7H+vqyP6LtXgTNBrEjgb02IpPQY+32FBvg00YCBp8wOZ6G5SwEe+CXh+xZaLB2/A5CO7H+nqsA9bgddDzC3aON7DafduHlY2wDqi2qYzredwj3kleaOK2WEIHegKHIeyvFXBQvLf3mIQXVQmL8SRwGcaRaOJh/AgmPsLCZloHzMP9wGkYx8onnBB/MmT6ZYrZ4i/sEZwqDuwMBo1qkbOC2meeTngfXLwhf/JrFdrlnSq5DuTk38y7/P3PRi+uyd9urUSb/EO+quS3UdzJRieRSCQSiUTi/+AXsaI6aRs9xwUAAAAASUVORK5CYII="></img>}
                {/* {showRequests && <img style={{height:"20px",cursor:"pointer"}} onClick={()=>{setShowRequest(!showRequests)}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAB60lEQVRoge3YSytEYRzH8a8Zt6VbspWN6468AAty20tKykYSC94FwkJegLIRJclCeQFWSIyUjRWGWLiMsDjzF2OO55wz5zzPQ3713Umf/9QcM+B/f3ONwDqQTLcGNBgV+VgrcA+8ZXQPtBh0eVoRkOA7Xkqkf8baTeGOlyaN6RSrBG5RH3AHVBky/rgl1Hhp0ZDRdfVACu8HvABNRqQu28Y7XtoxIs2yXvzjpW4D3i8rAE4IfsApUKhd/WkTWVB+G9euTq8UuPIAVJUEKjTbAVgIgHVrXrOdOvw9NlWl0r9T27ZCxEubuvCdEeCljqjx+cBhhAcc4TyaI9tYhHhpNCp8WI9NVUmgPIoD5jTgpdmw8bXAs8YDUoT8HXpTI17aCAvfZgAvteeKjwMHBg84wnl0B96oQbw0EhRfClxacMA1UBbkgBkL8NK0X3w18GgBXHoCavwcsGIBOrNlr/gW4NUCcGavQLOXA3YswLq1q8L3WIBU1eWGjxPtZ/2w2gdi2Q7otwDntb5sr/6xBTCvJcj4iDFkAcpvg4IvAM4sAPntHCiMA8PAAL9vJcAFwB7mX82g7eUBD0BxuC+Otj3GgBvTihx2HQNWTSty2Co4XxZ+098A6RjnSxdyxALOu9o0TNUFzv+oPvD/M7l3Jh9H9518zLIAAAAASUVORK5CYII="/>} */}
            </div>
            {console.log("Requests",requestList)}
            {console.log("Recomendations",recomendationList)}
            { showRequests && 
              <div className='requests-section'>
                { requestList.length!==0 &&
                  requestList.map((each,index)=>
                    <RequstComponent  userDetails={each} key={index} handleAcceptOrDeclineARequest={handleAcceptOrDeclineARequest}/>
                  )  
                }
              </div>
            }
        </div>
        <div className="network-mid-section">    
          {  recomendationList.length!==0 && 
             recomendationList.map((each,index)=>
              <EachNetworkCard userDetails={each} handleRemoveARecomend={handleRemoveARecomend} key={index}/>
              )
          }
        </div>
    </div>
   )
}
export default Networks
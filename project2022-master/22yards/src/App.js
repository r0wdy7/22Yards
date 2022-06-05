import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, Zoom } from 'react-toastify';
// import { ToastContainer, toast } from 'react-toast'
import 'react-toastify/dist/ReactToastify.css';
import {  
  Routes,
  Route,
  useNavigate,
  useLocation,
  Navigate
} from "react-router-dom";
import './App.css'
import Header from './Containers/Header'
import LeftFooter from './Containers/Scores';
import React,{useState,useEffect} from 'react';
import AddPost from './Containers/Feed/Components/AddPost';
import {isMobile,isTablet,isDesktop} from 'react-device-detect'
import Loader from './Components/Loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import FullNewsPage from './Containers/News/components/FullNewsCard';
import Routings from './Routes';
import SignIn from "./Containers/SignInAndSignUp/SignIn";
import SignUp from "./Containers/SignInAndSignUp/SignUp";
import { SignInSuccess,SignInFailure, SetIsRegisteredFalse , GetUserDetails} from './redux/actions/Auth';
import Cookies from "js-cookie"
import { decodeToken } from "react-jwt";

function App(){
  const [pathWhereIAm,setPathWhereIAm]=useState("")
  const [showTheAddPostModal,setShowTheAddPostModal]=useState(false)
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const location=useLocation();
  const isPageLoading=useSelector((state)=>state.loaderReducer.isPageLoading)
  const isFullNewsOpen=useSelector((state)=>state.newsArticlesReducer.isFullNewsOpen)
  const isUserLoggedIn=useSelector((state)=>state.authReducer.isUserLoggedIn)
  const isUserRegistered=useSelector((state)=>state.authReducer.isUserRegistered)
  const loggedInUserDetails=useSelector((state)=>state.authReducer.loggedInUserDetails);

  useEffect(async ()=>{
     const Token=Cookies.get("Token")
     if(Token!==undefined){
        console.log("sign In success")
        dispatch(SignInSuccess())
        // const x=decodeToken(Token)
        // if(!x.bio){
        //    x.bio=""
        // }
        // if(!x.profile_image){
        //    x.profile_image=""
        // }
        // console.log(x)
        // dispatch(SetUserDetails(x))
        dispatch(GetUserDetails())
        navigate(location.pathname)
     }else{
       dispatch(SignInFailure())
     }
     console.log("currentpath",location.pathname)
  },[])

  useEffect(()=>{
    if(loggedInUserDetails.username){
      console.log("abcd",loggedInUserDetails.username,isUserRegistered)
      if(isUserRegistered){
        
         dispatch(SetIsRegisteredFalse())
         navigate(`profile/${loggedInUserDetails.username}`)
      }
    }
  },[loggedInUserDetails])
  
  useEffect(()=>{
    const {pathname} = location;
    setPathWhereIAm(pathname)
  },[location])
  // function handleLeftSwipe(){
  //   navigate('/newsArticles') 
  // }
  // function handleMovementToFeed(){
  //   navigate('/feed')
  // }
  // function handleRightSwipe(){
  //   navigate('/scores')
  // }
  return(
    <>
    {
       !isUserLoggedIn && 
       <>
          <Header/>
          <Routes>
              <Route path="/" element={<SignIn/>}/>
              <Route path="/signUp" element={<SignUp/>}/>
              <Route path="*" element={<Navigate to="/" replace/>}/>
          </Routes>
          { isPageLoading && <Loader/>}
          <ToastContainer 
            position="bottom-left"
            autoClose={1500}
            hideProgressBar={true}
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover={false}
            transition={Zoom}
          />
       </>
    }
    { isUserLoggedIn &&
      <div>
        { isTablet && 
          <div>
            
            <div className='routing-page d-flex' style={{height:"100%",overflow:"scroll"}}>
                  { 
                  pathWhereIAm!=="/home" && pathWhereIAm!=="/signIn" && pathWhereIAm!=="/signUp" &&
                      <div 
                          style={{width:"29vw",height:"calc(100vh-65px)",border:"1px solid black",
                            position:"fixed",top:"65px",right:"5vw",bottom:"7px"}}>
                          <LeftFooter />
                      </div>
                  }
                  <div style={{width:"60vw",height:"calc(100vh-65px)",marginRight:"1vw",marginLeft:"5vw"}}>
                    <Routings/>
                  </div>
                  {   
                    (pathWhereIAm!=="/" && pathWhereIAm!=="/signIn" && pathWhereIAm!=="/signUp" && pathWhereIAm!=="/scores" && pathWhereIAm!=="/newsArticles") &&
                      <button onClick={()=>{setShowTheAddPostModal(true)}}
                              className="Add-post-button text-center"
                              style={{position:"fixed",bottom:"10px",left:"53vw"}}
                      >+</button>
                  }
              </div>
              <div className="header">
                 <Header/>
              </div>
              { showTheAddPostModal&&<AddPost onClose={()=>{setShowTheAddPostModal(false)}} x={1}/>}
          </div>
        }
        {  isMobile && !isTablet &&
            <div>
                {/* <div 
                  className='d-flex flex-row justify-content-around align-items-center'
                  style={{width:"100%",border:"1px solid black",position:"fixed",bottom:"0px",height:"50px",backgroundColor:"white",
                  }}>
                  <img 
                    style={{cursor:"pointer"}}
                    onClick={handleRightSwipe}
                    alt='22Yards'
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAABhElEQVRIie3WyUoDQRSF4d9oInbQjkOcFcRn8GXc+SpuRQmCIILGKG40RgR16bBwHhcOQUTxMVw4LKqL3C5Ix8jNQsiBrE6oL/StrgrU80/iRXQNFfo/xwfOgaky6CxwArRqoingAvgOPuMOOi+6rBbqA2di4Q2gSaBzoisC/Rpom4PmgXjQxYAl0T1poqdi4U2BNgLLonsE+jTQJHAUga6I7g5I1wLdAZoFuiq6W6BLCz0UC+866JroboBOLfRALLwn0DjmcdvuGujQQL0INAFsie5KE92PQLdFd4zZ7VUn9ovvfABfZboEpcNDJR7hTZUXQAIoEJ6vyqaycU+pdYHHgx+j/hrZ+IQvgxyl8bjv8APQq4mngEsBZB08Jzq189mmHTNLCyxibiKLy8uhCAxo4mngXgALAnevw2dgUBPvxszSAhnR2X8dtnsDRjTxHswsLTDj4BnRvQOjmvgQ8Bos/gmMOfi0wAuaMMAw8AJMlOknMXez6uFi01KhT9YCraeq/ADfBoxsL8kwQQAAAABJRU5ErkJggg=="
                  />
                  <img 
                    style={{cursor:"pointer"}}
                    onClick={handleMovementToFeed}
                    alt='22Yards'
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAA20lEQVRIie2VMQrCMBSGv4o4CS6eoBfwDk56AY/gFbyCZ/AQbs4OougpBHXs6lLROvgKNdS0TdIKmg/+5fGSL7y0BDzlCIGdJGxKOgQiIJFEUkvZSn3jUjoF4ow0zQ2YSU+2bk0HWOQI1ag9VvSBdQlpXowZAEdDqbF4AlwtpInsUZqA14dyt5QmwAOYA60iaRdYOhCqWQE9nfhQgzTNPitSRxAXjcSCt72DD01Ofn6dp/DS6+Jr4rbBGifX83+j9mIvblx80ayp+uifqxxoLAtsX6QTMKoi9vwOTwk3qeyGFp8/AAAAAElFTkSuQmCC"/>
                  
                  <img 
                    style={{cursor:"pointer"}}
                    onClick={handleLeftSwipe}
                    alt='22Yards'
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAABg0lEQVRIie3W30pUYRSG8d+kVjZYo2lFIdFFdDPeThASdCRRSdBBTFZECRYdRlCDmZWoQWR0HZ3IdDB7mLW/RuzPMjrwhTnZz/A9rG+z1toc5j/ICTT24elp4hVu48gQfgUfMJUtvotu9bulXvlcYGtoZYrPYjsI7hhUPoJ2YO8lV34GW0HQrqR9+f1CPpkt3wyCJYzuIV/Plk/iXRA8LORLgXVwMlu+FgSPMFaxMTw5SHkLb4PgcSF/GtgbTGTKT2E1CJ7h2L+Ud4LgOY5X7CiWA3udLW/iZRC8+F35sHH4Kxk1uOIyu/hePOv+oaeWlp/fc7/asrc7kq66bKsVg8pHcC+wtGk2gw3De7mBxcA+Sprf5eh8YDC9GnobrM82cDpDWm6qdiG9EdgmpjOk5/ApHBzXYwMLgX2u/v/XmcVOOHhRvf3mA/uC8xnSi/gaDr6p/hVyNbAdXMiQUt821wvpZb0h0cU3vZtJS0tvB1/bg89V0kuZ0n6a+/Dxg5AeJj0/AAvhjW5jdOHlAAAAAElFTkSuQmCC"/>

                </div> */}
                <div className='routing-page d-flex justify-content-center' 
                  style={{width:"98vw",overflow:"scroll",marginLeft:"auto",marginRight:"auto"}}>
                    <Routings/>
                </div>
                {  (pathWhereIAm!=="/home" && pathWhereIAm!=="/scores" && pathWhereIAm!=="/newsArticles") &&
                  <button onClick={()=>{setShowTheAddPostModal(true)}}
                            className="Add-post-button text-center"
                            style={{position:"fixed",bottom:"60px",right:"2vw"}}
                    >+</button>
                }
                <div className="header">
                  <Header/>
                </div>
                { showTheAddPostModal&&<AddPost onClose={()=>{setShowTheAddPostModal(false)}} x={0}/>}
            </div>
        }
        {  isDesktop && 
            <div>
              <div className="header">
                <Header/>
              </div>
                <div className='routing-page d-flex'   
                  style={{overflow:"scroll"}}
                >
                    { pathWhereIAm!=="/home" && pathWhereIAm!=="/signIn" && pathWhereIAm!=="/signUp" &&
                            <>
                              <div style={{width:"20vw",height:"calc(100vh-65px)",
                                          position:"fixed",top:"65px",right:"18vw",bottom:"7px"}}>
                                <div 
                                  style={{width:"100%",height:"100%"}}>
                                    <LeftFooter />
                                </div>
                              </div>
                            </>
                    }
                    <div style={{width:"43vw",marginRight:"1vw",marginLeft:"18vw",position:"relative"}}>
                      <Routings/>
                    </div>
                    {   (pathWhereIAm!=="/home" && pathWhereIAm!=="/signIn" &&pathWhereIAm!=="/signUp" &&pathWhereIAm!=="/scores" && pathWhereIAm!=="/newsArticles") &&
                        <button onClick={()=>{setShowTheAddPostModal(true)}}
                                className="Add-post-button text-center"
                                style={{position:"fixed",bottom:"10px",left:"55vw"}}
                        >+</button>
                        // <>
                          
                        //   {/* <img  onClick={()=>{setShowTheAddPostModal(true)}} className="Add-post-button" style={{position:"fixed",bottom:"10px",left:"55vw"}} src="data:image/png;base64,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"/> */}
                        //   <button onClick={()=>{setShowTheAddPostModal(true)}}
                        //     className="Add-post-button text-center"
                        //     style={{position:"fixed",bottom:"60px",right:"2vw"}}
                        //     >+</button>
                        // </>
                    }
                </div>
                { showTheAddPostModal&&<AddPost onClose={()=>{setShowTheAddPostModal(false)}} x={1}/>}
            </div>
        }  
        { isFullNewsOpen && <FullNewsPage/>}
        { isPageLoading && <Loader/>}
        <ToastContainer 
          position="bottom-left"
          autoClose={1500}
          hideProgressBar={true}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover={false}
          transition={Zoom}
        />
      </div>
    }
    </>
  )
}
 
export default App

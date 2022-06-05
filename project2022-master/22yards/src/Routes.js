import { Routes ,Route , Navigate} from "react-router-dom";
import { Suspense,lazy } from "react";
import { isDesktop } from "react-device-detect";
import ClipLoader from "react-spinners/ClipLoader";
import "./Components/style.components.css"
// import Feed from './Containers/Feed'
// import Networks from './Containers/Networks'
// import Profile from './Containers/Profile'
// import Notifications from './Containers/Notifications'
// import FeedBody from './Containers/Feed/FeedBody';
// import LeftFooter from './Containers/Scores';
// import RightFooter from './Containers/News';
// import Home from './Containers/Home';
// import Loader from "./Components/Loader/Loader";


//Lazy Imports
const Home=lazy(()=>import('./Containers/Home'))
const Feed=lazy(()=>import("./Containers/Feed"))
const Networks=lazy(()=>import("./Containers/Networks"))
const Profile=lazy(()=>import("./Containers/Profile"))
const Notifications=lazy(()=>import("./Containers/Notifications"))
const FeedBody=lazy(()=>import("./Containers/Feed/FeedBody"))
const LeftFooter=lazy(()=>import("./Containers/Scores"))
const RightFooter=lazy(()=>import("./Containers/News"))
const Loader=lazy(()=>import("./Components/Loader/Loader"))



export default function Routings(){
    return(
        <Suspense 
            fallback={
                <div className="loaderContainer d-flex justify-content-center align-items-center">
                        {!isDesktop && <img src="/LogoRed.jpeg" style={{width:"60vw"}}/>}
                        { isDesktop && <img src="/LogoRed.jpeg" className="loader22yardsimage"/>}
                        <ClipLoader  size={35} color={"red"}/>
                  </div>
                 }>
            <Routes>
                <Route key="1" path="/" element={<Feed/>}/>
                <Route key="2" path="/feed/:id" element={<FeedBody/>}/>
                <Route key="3" path="/notifications" element={<Notifications/>}/>
                <Route key="4" path="/profile/:username" element={<Profile/>}/>
                <Route key="5" path="/newsArticles" element={<RightFooter/>}/>
                <Route key="6" path="/scores" element={<LeftFooter/>}/>
                <Route key="7" path="/networks" element={<Networks/>}/>
                <Route key="8" path="/home" element={<Home/>}/>
                <Route key="9" path="*" element={<Navigate to="/" replace/>}/>
            </Routes>
        </Suspense>
    )
}
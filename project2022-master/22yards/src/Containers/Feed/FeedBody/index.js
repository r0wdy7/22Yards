import {useLocation,useNavigate} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import CommentSection from '../Components/CommentSection';
import './index.css'
import PostCard from '../Components/postCard';

function FeedBody(){
    const Location=useLocation();
    const navigate=useNavigate();
    const {post,prevPath}=Location.state;
    console.log(prevPath)
    function handleGoBack(){
       navigate(prevPath)
    }
    
    return(
        <div className='feed-comment-mid-section'>
            <div>
               <img alt="22Yards" className='back-button-full-post' onClick={handleGoBack} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAABPElEQVRoge3ZIUsEURSG4Ud3LQaxiVEw2xfEbDFa/Q8mf4YYzTaLWdwgIhZBDBYxCTbBJigoGnYX7oq7zizi3IP3hROmveeDuXPuGQqFQuE/0MEVTpoWqcssdvGGD9w0q1OPVdzqiQ9qq1GjisxhD++G5e/QbtCrEuu4NyweIv157PtePPv0N/BgtHy26S/g0HjxbNPfxKOf5bNLfxFHqolnlf6UXpJPqstnk/4SuuqJZ5F+C9t4Vl/+r+p8lPwyTjMQrFJDtLGDlwzEajewgssMhGo3MNNP/TUDmYkauMhAYuKaHnQRlRYO9I7Ktf5zWMK+xCmhj9GUsB+ylAijxNm4BgaEHeZSQo/TKWEvNF8Je6VMCX2pTwm7VkkJvdhKCbtaTAm93E0Ju15PCf2DI6WDaxw3LVIoFAq/yyfDMHP5FamJXwAAAABJRU5ErkJggg=="/>
            </div>
            <PostCard post={post}/>
            <CommentSection/>
        </div>
    )
}

export default FeedBody
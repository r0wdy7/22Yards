import PostCard from './postCard';
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css'


function FeedContent(props){
    const {posts}=props
    return (
           posts.map((post,index)=>
               <PostCard post={post} key={index}/>
           )
    )
}
export default FeedContent
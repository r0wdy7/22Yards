import './index.css'
import PostCard from '../Profile/Components/postCard';

var height;
height = Math.floor(Math.random()*(400)+100);
var link = "https://picsum.photos/"+height+"/"+height;
const postDetails={
  'id':height+1,
  'user':`#rithvik_${height}`,
  'content':" They are low on confidence, their form has hit a terrible trough, and on Monday when the situation demanded it, India's most-experienced batting pair was unable to handle the heat in the kitchen",
  'link':link,
  'key':height+1
}

function Posts(){
   return (
        <div className='d-flex flex-column'>
            <PostCard post={postDetails}/>
            <PostCard post={postDetails}/>
            <PostCard post={postDetails}/>
            <PostCard post={postDetails}/>
        </div>
   );
}

export default Posts;
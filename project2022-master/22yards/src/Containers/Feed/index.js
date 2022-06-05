import 'bootstrap/dist/css/bootstrap.min.css';
import FeedContent from './Components/feedContent.js';
import './index.css'
import ImageView from '../../Components/ImageView/ImageView.js';
import React,{useState, useRef} from 'react'
import ImageInCarousal from './Components/ImageInCarousal.js';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { LoaderStart,LoaderStop } from '../../redux/actions/Loader.js';

var height1;
height1 = Math.floor(Math.random()*(400)+100);
var link1 = "https://picsum.photos/"+height1+"/"+height1;

function createFeed(index){
    var height;
    height = Math.floor(Math.random()*(400)+100);
    var link = "https://picsum.photos/"+height+"/"+height;
    const postDetails={
      'id':index+1,
      'user':`#rithvik_${height}`,
      'content':" They are low on confidence, their form has hit a terrible trough, and on Monday when the situation demanded it, India's most-experienced batting pair was unable to handle the heat in the kitchen",
      'link':link,
      'key':index+1
  }
  return postDetails
}

function Feed(){
  const [imagesInAddPost,setImagesInAddPost]=useState([])
  const [urlOfImage,setUrlOfImage]=useState("")
  const dispatch=useDispatch()
  const [posts,setPosts]=useState([])
  const [textAreaHeight, setTextAreaHeight] = useState("auto");
  const [parentHeight, setParentHeight] = useState("auto");
  const postTextArea1=useRef(null)
  const [newPostContent,setNewPostContent]=useState("")

  useEffect(()=>{
    //dispatch(LoaderStart())
    var w=[]
    for(var i=0;i<8;i++){
      var x=createFeed(i);
      w.push(x);
    }  
    setPosts([...w])
    //setTimeout(() => dispatch(LoaderStop()), 1000);
  },[])


  useEffect(()=>{
    setParentHeight(`${postTextArea1.current.scrollHeight}px`);
    setTextAreaHeight(`${postTextArea1.current.scrollHeight}px`);
  },[newPostContent])

  function addImagesToPost(event){
    const x=event.target.files;
    const fileArray = x ? Array.from(x) : [];
    var y=[];
    fileArray.map((each)=>(
       y.push(URL.createObjectURL(each))
    ))
    setImagesInAddPost([...imagesInAddPost,...y])
  }
  function handleDeleteAImagefromAddPosts(indexUrlToDelete){
    var x=imagesInAddPost;
    x.splice(indexUrlToDelete,1)
    setImagesInAddPost([...x])
  }
  
  function handlePostContentChange(e){
    setNewPostContent(e.target.value)
    setTextAreaHeight("auto");
    setParentHeight(`${postTextArea1.current.scrollHeight}px`);
  }

  return (
    <div className="d-flex flex-column"
         style={{width:"100%"}}>   
          <div>
            <div className='d-flex flex-column p-2 mb-2' style={{backgroundColor:"white",borderRadius:"10px"}}>
                {/* <div className='d-flex mb-1'>
                  <div className='d-flex justify-content-start'>
                      <img src={link1} className='add-post-profilepic'/>
                  </div>
                  <div className='d-flex align-items-center' style={{width:"100%"}}>
                    <div placeholder='say' className='Add-Post-Scrolled' contentEditable>
                    </div>
                  </div>
                </div> */}
                <div className='d-flex mb-1' style={{width:"100%"}}>
                  <div className='d-flex justify-content-start'>
                      <img src={link1} className='add-post-profilepic'/>
                  </div>
                  <div style={{
                      minHeight: parentHeight,
                      width:"100%",
                  }}>
                    <textarea  
                        ref={postTextArea1}
                        rows={1}
                        style={{
                            height: textAreaHeight,
                        }}
                        maxLength="500"
                        className="Add-Post-Scrolled"
                        onChange={handlePostContentChange}
                      >
                          
                      </textarea>
                  </div>
                
                </div>
                
                {
                  imagesInAddPost.length!==0 &&
                      <div className='d-flex flex-row Add-posts-images-container'>
                        {
                            imagesInAddPost.map((each,index)=>{
                              return(
                                  <ImageInCarousal src={each} 
                                    onClick={()=>{
                                      setUrlOfImage(each)
                                    }}
                                    onDelete={()=>{handleDeleteAImagefromAddPosts(index)}}
                                    key={each}
                                  />
                              )
                            })
                        }
                        </div>       
                }
                <div className='d-flex justify-content-around align-items-center'>
                    <>
                      <label htmlFor='uploadImagesInAddPostRef'>
                          <span className='Add-Images-In-AddPost-Button d-flex '>
                            <img style={{height:"30px"}}src="data:image/png;base64,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"></img>
                            <p style={{fontSize:"14px",marginBottom:"auto",marginTop:"auto"}}>Photos</p>
                          </span>
                      </label>
                      <input type="file" multiple id="uploadImagesInAddPostRef" accept='image/*' style={{display:"none"}} onChange={addImagesToPost}/>
                    </>
                    <img style={{height:"20px"}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAATUlEQVRIie3XwQ2AIBAF0cHQE5XSgVAJMXalPSwGYjL/Pnl7Xfjb6tnv2voV7XNYTpRwCxwzsbCwsLCwsLCwsLDwXjj+ScAg8Xx2yaq9KmwHhEWFW+EAAAAASUVORK5CYII="></img>
                    <>
                      <label htmlFor='uploadVideoInAddPostRef'>
                         <span className='Add-Images-In-AddPost-Button d-flex '>
                           <img style={{height:"20px",marginRight:"2px"}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAACs0lEQVR4nO3Zv08TYRgH8O9zRVT8NWCAG1ESB0YGIjQVGxwoqU6waOLsrINxdfIP0N0Epi4mggxGbaSSaGLioBMiMQ53QYUEjVjo3eOglru01Gv7vGcbns/G5d5vH56879NrDlBKKaWUUkoppdR+Q9UuutlUmtl/Encxtdhzhaq1Nquj2kVm/5aJD/sf1sfHT2wfKt5l8OW/14LNrGjA2sWzA56PdFwFmuRmksNFqzgD8MBe91Q0wPMT17DH0WgXPDWVcH84N9jCbTAfqHVvqAHLExMHge9XATZboUFuNtXvbDkzRBiJ8m9YwT+OdmymAe42VZxpzmRyitl/TcBI1DWhHUA+XeI23PzVBl1UoQYw4YJcWfFwM8nhYuLnLBinG1lfbsBaZqzPQ+mUXGlm8dhYh3ukdP33oEPNQVdLuQGe5SVlSjPPzab6HS7NEKINuloCQ5AHm4uKh5MdnWb239Qz6GopN4AZZyQCjWNMAzguFVduABHt+bTUWmhFMi14BE5KBpvC4FXJvEADSGxbmZSwYGwHHJMMNmaHP0jGWf++pbX0bHV+BFCSygsegW9SoSZRPl8C8EkqL3gENqVCYyB2DII74ItUqGlEcoNw90EIvCwVGgOxr8LdByGgbRrAvoEdANBbqVDjfMoT44VEVLkBCT9RkAiMg72w+Lm3yz4Hxk0QdprJKjeg51HeheBwMY1yOc+eL9wBUxKg943mhB+EmB43XVnM7LnFV53e9hCBZhtZH2oAMx7IlBWv7oWXm31zi1f+/FTeqGdtqAEbXevPAPoqWl2M7PlCjsgaYmAp6ppQAwZz77YBvi9fWnz6Hj5ftQ/bqagDsuLHkOX599DOb0ZQ34CsaEDvwtIKAy31ZrhRUQZk1dcgzuToeRA9NVda/Uy9HldKKaWUUkoppdT+8ws9jNESxBiSfAAAAABJRU5ErkJggg=="></img>
                           <p style={{fontSize:"14px",marginBottom:"auto",marginTop:"auto"}}>Video</p>
                         </span>
                      </label>
                      <input type="file" multiple id="uploadVideoInAddPostRef" accept='video/*' style={{display:"none"}} onChange={addImagesToPost}/>
                    </>
                    <img style={{height:"20px"}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAATUlEQVRIie3XwQ2AIBAF0cHQE5XSgVAJMXalPSwGYjL/Pnl7Xfjb6tnv2voV7XNYTpRwCxwzsbCwsLCwsLCwsLDwXjj+ScAg8Xx2yaq9KmwHhEWFW+EAAAAASUVORK5CYII="></img>
                    <>
                      <label htmlFor='uploadLocationInAddPostRef'>
                        <span className='Add-Images-In-AddPost-Button d-flex '>
                        <img style={{height:"25px",marginRight:"2px"}} src="data:image/png;base64,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"></img>
                        <p style={{fontSize:"14px",marginBottom:"auto",marginTop:"auto"}}>Location</p>
                        
                        </span>
                      </label>
                      <input type="file" multiple id="uploadLocationInAddPostRef" accept='image/*' style={{display:"none"}} onChange={addImagesToPost}/>
                    </> 
                </div>
            </div>  
          </div>  
          <div className='horizontal-line'>

           </div>
          <FeedContent posts={posts}/> 
          {urlOfImage!=="" && <ImageView src={urlOfImage} CloseThisImage={()=>{
            setUrlOfImage("")
          }}/>}
    </div>
   )
}
export default Feed
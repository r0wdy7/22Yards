import {useState} from 'react';
import AddPostDiv from './AddPostDiv';

function AddPost(props){
     
    var height;
    height = Math.floor(Math.random()*(400)+100);
    var link = "https://picsum.photos/"+height+"/"+height;
    const [imagesInAddPost,setImagesInAddPost]=useState([])
    const [urlOfImage,setUrlOfImage]=useState("")

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
    if(props.x===0){
      return(
        <div className='Add-New-Post-Modal-Container'>
            <div className='Add-New-Post-Modal-Mobile'>
                <AddPostDiv onClose={()=>{props.onClose()}}/>
            </div>
        </div>
      )
    }
    if(props.x===1){
      return(
        <div className='Add-New-Post-Modal-Container'>
            <div className='Add-New-Post-Modal-Tab-Desktop'>
                <AddPostDiv onClose={()=>{props.onClose()}}/>
            </div>
        </div>
      )
    }
        
}


export default AddPost
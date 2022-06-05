async function ImageUploader(props){
    const data = new FormData()
    data.append("file", props)
    data.append("upload_preset", "isgoh1xy")
    data.append("cloud_name","dhz8n0ka8")
    const response=await fetch("  https://api.cloudinary.com/v1_1/dhz8n0ka8/image/upload",{
      method:"post",
      body: data
    })
    const imageUrl=await response.json()
  
    return imageUrl.url
}

export default ImageUploader
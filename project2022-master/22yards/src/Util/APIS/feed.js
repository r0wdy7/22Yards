import {GetBody, PostBody , BASE_URL} from "../util"

//GET ALL POSTS
export const GetAllPostsAPI=async ()=>{
    const options=GetBody()
    const res=await fetch(`${BASE_URL}/feed`,options)
    const response=await res.json()
    return response
}

//Post A Post
export const PostAPostsAPI=async ({postDetails})=>{
    const options=PostBody(postDetails)
    const res=await fetch(`${BASE_URL}/feed`,options)
    const response=await res.json()
    return response
}
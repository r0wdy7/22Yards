import { BASE_URL, PostBody ,GetBody } from "./util";

//News API
export const APIforNews=async (pageNo)=>{
    const res=await fetch(`https://newsdata.io/api/1/news?apikey=pub_416595014f421b1f81b9744d76817e9a10f5&category=sports&q=cricket&page=${pageNo}`,{method:"GET"})
    const response=await res.json();
    return response
}

//Sign UP API
export const SignUpApi=async (userDetails)=>{
    const options=PostBody(userDetails)
    const res=await fetch(`${BASE_URL}/register`,options)
    const response=await res.json()
    return response
}

//Sign IN API Login
export const SignInApi=async (userDetails)=>{
    const options=PostBody(userDetails)
    const res=await fetch(`${BASE_URL}/login`,options)
    const response=await res.json()
    return response
}

//Logout API  {credentials:"include"}
export const LogOutApi=async ()=>{
    const options=GetBody()
    const res=await fetch(`${BASE_URL}/logout`,options)
    const response=await res.json()
    return response
}

//Get User Details Api
export const GetUserDetailsApi=async ()=>{
    const options=GetBody()
    const res=await fetch(`${BASE_URL}/profile/profile-details`,options)
    const response=await res.json()
    return response
}
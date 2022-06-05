import {BASE_URL, PutBody, PostBody} from "../util"

export const UpdateUserDetailsApi=async(userDetails)=>{
    console.log("details",userDetails)
    const options=PutBody(userDetails)
    console.log("options",options)
    const response=await fetch(`${BASE_URL}/profile`,options)
    const res=response.json()
    return res
}

// Delete A connection
export const DeleteAConnectionApi=async (id)=>{
    const options=PostBody({"others":id})
    const res=await fetch(`${BASE_URL}/profile/del-connection`, options)
    const response=await res.json()
    return response
}

//Delete sent request
export const DeleteASentRequestApi=async (id)=>{
    const options=PostBody({"celebrity":id})
    const res=await fetch(`${BASE_URL}/profile/del-request`, options)
    const response=await res.json()
    return response
}
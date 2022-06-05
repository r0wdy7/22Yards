import { BASE_URL, GetBody , PostBody} from "../util";
// Get Requests
export const GetRequestsApi=async ()=>{
    const options=GetBody()
    const res=await fetch(`${BASE_URL}/network`, options)
    const response=await res.json()
    // console.log("hey",response)
    return response
}

//Get Recomendations
// export const GetRecomendationsApi=async ()=>{
//     const options=GetBody()
//     const res=await fetch(`${BASE_URL}/login`, options)
//     const response=await res.json()
//     return response
// }

//Accept Request
export const AcceptARequestApi=async (id)=>{
    const options=PostBody({"fan":id})
    const res=await fetch(`${BASE_URL}/network/new-connection`, options)
    const response=await res.json()
    return response
}

//Reject Request
export const RejectARequestsApi=async (id)=>{
    const options=PostBody({"enemy":id})
    const res=await fetch(`${BASE_URL}/network/decline-connection`, options)
    const response=await res.json()
    return response
}

//Connect Recomendation
export const ConnectARecomendApi=async (id)=>{
    const options=PostBody({"celebrity":id})
    console.log("op",options)
    const res=await fetch(`${BASE_URL}/network/pending-connection`, options)
    console.log("hey",res)
    const response=await res.json()
    return response
}

// Delete Recomendation
export const DeleteARecomendApi=async (id)=>{
    const options=PostBody({"enemy":id})
    console.log("op",options)
    const res=await fetch(`${BASE_URL}/network/decline-suggestion`, options)
    console.log("hey",res)
    const response=await res.json()
    return response
}


import profiileActionTypes from "../actionTypes/Profile";

export const EditProfileStart=()=>({
    type:profiileActionTypes.EDIT_USER_DATA_START
})

export const EditProfileCancel=()=>({
    type:profiileActionTypes.EDIT_USER_DATA_CANCEL
})

export const EditProfileSave=(userDetails)=>({
    type:profiileActionTypes.EDIT_USER_DATA_SAVE,
    payload:userDetails
})

export const EditProfileSuccessFul=()=>({
    type:profiileActionTypes.EDIT_USER_DATA_START
})

export const EditProfileFailure=()=>({
    type:profiileActionTypes.EDIT_USER_DATA_FAILURE
})

export const SeteditedUserDetails=(UserDetails)=>({
    type:profiileActionTypes.SET_EDITED_USER_DETAILS,
    payload:UserDetails
})


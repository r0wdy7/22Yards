import profiileActionTypes from "../actionTypes/Profile";

const INITIAL_STATE={
    isProfileInEditMode:false,
    editedUserDetailsobj:{}
}

const ProfileReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case profiileActionTypes.EDIT_USER_DATA_START:
            return{
                ...state,
                isProfileInEditMode:true
            }
        case profiileActionTypes.EDIT_USER_DATA_SAVE:
        case profiileActionTypes.EDIT_USER_DATA_CANCEL:
            return{
                ...state,
                isProfileInEditMode:false
            }
        case profiileActionTypes.SET_EDITED_USER_DETAILS:
            return{
                ...state,
                editedUserDetailsobj:action.payload
            }
        default:
            return state
    }
}

export default ProfileReducer
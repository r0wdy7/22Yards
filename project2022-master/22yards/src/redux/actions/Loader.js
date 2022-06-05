import LoaderActionTypes from "../actionTypes/loader"

export const LoaderStart=()=>({
    type:LoaderActionTypes.SHOW_THE_LOADER
})

export const LoaderStop=()=>({
    type:LoaderActionTypes.HIDE_THE_LOADER
})
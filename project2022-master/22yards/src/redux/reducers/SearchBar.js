import { SearchBarActions } from "../actionTypes/SearchBar";

const INITIAL_STATE={
    isSearchBarOpen:false,
    searchBarResults:[],
}

const searchBarReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case SearchBarActions.SELECT_SEARCHBAR:
            return{
                ...state,
                isSearchBarOpen:true
            }
        case SearchBarActions.SEARCHBAR_TRIGGERING:
            return{
                ...state,
                searchBarResults:action.payload
            }
        default:
            return state
    }
}

export default searchBarReducer
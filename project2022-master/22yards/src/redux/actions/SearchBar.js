import SearchBarActions from "../actionTypes/SearchBar"

export const SearchBarOpen=()=>({
    type:SearchBarActions.SELECT_SEARCHBAR,
});

export const getSearchResults=(searchValue)=>({
    type:SearchBarActions.SEARCHBAR_TRIGGERING,
    payload:searchValue,
});


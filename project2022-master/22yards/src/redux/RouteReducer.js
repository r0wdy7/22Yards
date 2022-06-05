import { combineReducers } from "redux";

import LoaderReducer from "./reducers/Loader";
import searchBarReducer from "./reducers/SearchBar";
import newsArticlesReducer from "./reducers/news";
import AuthReducer from "./reducers/Auth"
import NewtorkReducer from "./reducers/networks";
import ProfileReducer from "./reducers/Profile";

const RootReducer=combineReducers({
    loaderReducer:LoaderReducer,
    searchBarReducer:searchBarReducer,
    newsArticlesReducer:newsArticlesReducer,
    authReducer:AuthReducer,
    newtorkReducer:NewtorkReducer,
    profileReducer:ProfileReducer,
})

export default RootReducer
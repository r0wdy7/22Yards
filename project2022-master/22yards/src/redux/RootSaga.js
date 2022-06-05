import { all, call } from "redux-saga/effects";
import getNewsSaga from "./sagas/news";
import { authSaga } from "./sagas/Auth";
import { networkSaga } from "./sagas/network";
import { profileSagas } from "./sagas/Profile";

export default function* rootSaga(){
    yield all([
        call(getNewsSaga),
        call(authSaga),
        call(networkSaga),
        call(profileSagas),
    ])
}
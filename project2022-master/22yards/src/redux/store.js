import { createStore ,applyMiddleware,compose} from "redux";
import createSagaMiddleware from 'redux-saga'
import RootReducer from "./RouteReducer";
import rootSaga from "./RootSaga";
import {logger} from "redux-logger"

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];
if (process.env.NODE_ENV === "development") {
    middlewares.push(logger);
}

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store=createStore(RootReducer, composeEnhancer(applyMiddleware(...middlewares)));

sagaMiddleware.run(rootSaga)

export default store
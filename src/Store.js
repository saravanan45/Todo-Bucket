import { applyMiddleware, createStore } from "redux";
import reducers from "./Redux/reducers";
import createSagaMiddleware from "redux-saga";

export const sagaMiddleware = createSagaMiddleware();

export default createStore(reducers, applyMiddleware(sagaMiddleware));

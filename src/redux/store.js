import { legacy_createStore,applyMiddleware ,combineReducers} from "redux";
import {reducer} from './reducer';
import {authReducer} from './auth/authReducer';
import thunk from 'redux-thunk';
const Root=combineReducers({authReducer:authReducer,appReducer:reducer})
export const store = legacy_createStore(Root,applyMiddleware(thunk))
import {applyMiddleware, combineReducers, compose, legacy_createStore} from 'redux'
import thunk from 'redux-thunk'
import { authReducer } from './auth/authReducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rootReducer = combineReducers({ authReducer: authReducer})
const store = legacy_createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
)

export default store
import { combineReducers } from 'redux';

const loginUser = ( state={}, action={}) => {
    switch(action.type){
        case 'LOGIN_ERROR':
            return {
                ...state,
                authError: 'login failed',
                isLoggedIn: false,
                isLoggedOut: true,
            }
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                ...action.payload,
                authError: null,
                isLoggedIn: true,
                isLoggedOut: false,
            }
        case 'LOGOUT_SUCCESS':
           
            return {
                state,
                authError: null,
                isLoggedIn: false,
                isLoggedOut: true,
            }
        default:
            return state;
    }
}
const registeredUsers = ( state=[], action={}) => {
    switch(action.type){
        case 'REGISTER_ERROR':
            return {
                ...state,
                ...action.payload
            }
        case 'REGISTER_SUCCESS':
            return [
                ...state,
                action.payload
            ]
        default:
            return state;
    }
}

export default combineReducers({registeredUsers,loginUser});
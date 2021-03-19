export function signIn(cred){
       return (dispatch, getState) => {
           return dispatch({type: 'LOGIN_SUCCESS', payload: cred, })
       }
}
export function signOut(cred){
       return (dispatch, getState) => {
           return dispatch({type: 'LOGOUT_SUCCESS', payload: {}, })
       }
}
export function signUp(cred){
       return (dispatch, getState) => {
           return dispatch({type: 'REGISTER_SUCCESS', payload: cred })
           
       }
}


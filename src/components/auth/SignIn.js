import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router';
import { signIn } from "../../store/actions/authActions";

const SignIn = ({ history }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch();
    
    const state = useSelector(state => state);

    const hadndleSubmit = (e) => {
        e.preventDefault();
        const userExists = state.registeredUsers?.find((x)=>x.email===email)
        if (userExists) 
            dispatch(signIn({ email, password }))
        if (userExists || ( state?.loginUser?.isLoggedIn )) {
            history.push('/')
        } 
        else{
            history.push('/signup')
        }
    }
    
    return (
        <div>
            <form onSubmit={(e) => hadndleSubmit(e)}>
                <h5>Sign IN</h5>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="password">password</label>
                    <input type="password" id="password" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>
        </div>
    )
}

export default withRouter(SignIn);

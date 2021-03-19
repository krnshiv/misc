import React , { useState } from 'react';
import{ useDispatch,useSelector } from 'react-redux';
import{ withRouter } from 'react-router-dom';
import { signUp } from "../../store/actions/authActions";

const SignUp = ({ history}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const state = useSelector(state => state.registeredUsers);
    
    const dispatch = useDispatch();
    const hadndleSubmit=(e) =>{
        e.preventDefault();
        let isRegistered = state?.find((eg)=>eg.email===email);
        console.log(state,email)
        if (isRegistered){
            history.push('/signin')
        }

        dispatch(signUp({email,password}))
        history.push('/signin')
        
    }

    
    return (
      <div>
          <form onSubmit={(e)=> hadndleSubmit(e)}>
              <h5>Sign UP</h5>
              <div>
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" onChange={(e)=>setEmail(e.target.value)}/>
              </div>
              <div>
                  <label htmlFor="password">password</label>
                  <input type="password" id="password" onChange={(e)=>setPassword(e.target.value)}/>
              </div>
              <div>
                  <button> login</button>
              </div>
          </form>
      </div>
    )
}

export default withRouter(SignUp);

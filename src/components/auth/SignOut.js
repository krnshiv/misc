import React from 'react';
import { useDispatch} from 'react-redux';
import { withRouter } from 'react-router';
import { signOut } from "../../store/actions/authActions";

const SignOut = ({ history }) => {
    const dispatch = useDispatch();
    
    return (
        <div>
            <button onClick={async () => {
                dispatch(signOut())
                await history.push('/')
            }}>Logout</button>
        </div>
    )
}

export default withRouter(SignOut);

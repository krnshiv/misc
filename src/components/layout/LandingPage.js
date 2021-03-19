import React from 'react';
import{ useSelector  } from 'react-redux';

const LandingPage = () => {

    const state = useSelector(state => state);
    const loggedInUser = state.loginUser || {};
    const isUserLoggedIn = loggedInUser?.isLoggedIn || false;
    const isUserLoggedOut = loggedInUser?.isLoggedOut || false;

    return (
        <div>
            {isUserLoggedIn && <h2> Log in success</h2>}
            {isUserLoggedOut && <h2> Log out  success</h2>}
            <h1>HOME PAGE { loggedInUser?.email }</h1>
        </div>
    )
}

export default LandingPage;
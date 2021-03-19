import React from 'react';
import { Link } from 'react-router-dom';
import{ useSelector  } from 'react-redux';

const Nav = () => {
    const state = useSelector(state => state);
    const loggedInUser = state.loginUser || {};
    const isUserLoggedIn = loggedInUser?.isLoggedIn || false;
    const isUserLoggedOut = loggedInUser?.isLoggedOut || false;

    return (
        <nav>
            <div>
                <h3>Navbar</h3>
                <Link to='/'>home</Link>{' '}
                <Link to='/signin'>SignIn</Link>{' '}
                <Link to='/signup'>SignUp</Link>{' '}
                {isUserLoggedIn &&<Link to='/signout'>SignOut</Link>}{' '}

            </div>
        </nav>
    )
}

export default Nav;
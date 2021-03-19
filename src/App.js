import React from 'react';
import  Nav from './components/layout/Nav'
import LandingPage from './components/layout/LandingPage'
import { BrowserRouter, Switch ,Route} from 'react-router-dom';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import SignOut from './components/auth/SignOut';

  function App () {
  
    return (
      <BrowserRouter>
      <div className="App">
        <Nav/>
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/signin' component={SignIn} />
          <Route exact path='/signup' component={SignUp} />
          <Route exact path='/signout' component={SignOut} />
        </Switch>
      </div>
      </BrowserRouter>
    );
  }


export default App;

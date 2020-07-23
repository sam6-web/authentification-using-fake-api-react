import React from 'react';
import {Link,BrowserRouter,Route, Switch}from 'react-router-dom'
import './App.css';
import SignIn from './components/form/SignIn';
import SignUp from './components/form/SignUp';
import Main from './components/mainPage/Main'

function App() {
  return (
    <div className="App">
      <BrowserRouter>    
        <nav className="navbar">
          <div>
            <Link to={"/"}> Home </Link>
          </div>
          <div >
            <Link  to={"/login"}> login </Link>
            <Link  to={"/signup"}> signup </Link>
          </div>                                     
        </nav>
        <Switch>
          <Route exact path = "/">
            <h3> home page </h3>
          </Route>
          <Route path = "/login">
            <SignIn/>
          </Route>
          <Route path = "/signup">
            <SignUp/>
          </Route>
          <Route path = "/mainpage">
          <Main/>
          </Route>
        </Switch>                 
      </BrowserRouter>        
    </div>
  );
}

export default App;

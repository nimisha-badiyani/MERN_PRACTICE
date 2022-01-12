import React from 'react';
import { Route } from 'react-router-dom';
import "./App.css"
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Posts from './Components/Posts';
import Login from './Components/Login';
import Signup from './Components/Signup';

const App = () => {
  return (
    <>
      <Navbar />
      
      <Route exact path="/" component={Home}>
      </Route>

      <Route path="/posts">
        <Posts />
      </Route>

      <Route path="/login">
        <Login />
      </Route>

      <Route path="/signup">
        <Signup />
      </Route>
    </>
  );
}

export default App;

import React, { useReducer , createContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import "./App.css";
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Posts from './Components/Posts';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Errorpage from './Components/Errorpage'
import Logout from './Components/Logout';

import { initialState , reducer } from "../src/reducer/useReducer"

export const UserContext = createContext();

 const Routing = () => {
   return (
      <>
    <Switch>
      <Route exact path="/" component={Home}></Route>

      <Route path="/posts">
        <Posts />
      </Route>

      <Route path="/login">
        <Login />
      </Route>

      <Route path="/signup">
        <Signup />
      </Route>

      <Route path="/logout">
        <Logout />
      </Route>

      <Route>
        <Errorpage />
      </Route>
     </Switch >
   </>
   )
  }

const App = () => {
  
  const [ state, dispatch ] = useReducer(reducer, initialState)
  return (
    <>
      <UserContext.Provider value={{state, dispatch}}>
        <Navbar />
        <Routing />
      </UserContext.Provider>
    </>
  );
}

export default App;

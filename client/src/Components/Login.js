import React , { useState, useContext } from 'react';
import loginpic from '../Images/signin.svg';
import { NavLink, useHistory } from "react-router-dom";

import { UserContext } from "../App";
 
const Login = () => {

  const { state, dispatch } = useContext(UserContext);

  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = async (e) => {
    e.preventDefault();

    const res = await fetch('/signin', {
      method:"POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        password
      })
    });
    const data = res.json();

    if (res.status === 400 || !data) {
      window.alert("Invalid Credentials");
    } else {
      dispatch({type:'USER', payload:true})
      window.alert("Login Successfully");
      history.push("/");
    }
  }

    return (
      <>
        <section className="sign-in">
          <div className="container mt-5">
            <div className="signin-content">
              <div classname="signin-image">
                <figure>
                  <img src={loginpic} alt="login pic" srcset="" />
                </figure>
                <NavLink to="/signup" className="signin-image-link">
                  Create an account
                </NavLink>
              </div>

              <div className="signin-form">
                <h2 classname="form-title">signin</h2>
                <form method="POST" className="register-form" id="register-form">
                  
                  <div className="form-group">
                    <label htmlFor="email">
                      <i class="zmdi zmdi-email"></i>
                    </label>
                    <input
                      type="text"
                      name="email"
                      id="email"
                      autocomplete="off"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your Email"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="password">
                      <i class="zmdi zmdi-lock material-icons-name"></i>
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      autocomplete="off"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="your Password"
                    />
                  </div>

                  <div className="form-group form-button">
                    <input
                      type="submit"
                      name="signin"
                      id="signin"
                      className="form-submit"
                      value="Login"
                      onClick ={loginUser}
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </>
    );
}

export default Login;

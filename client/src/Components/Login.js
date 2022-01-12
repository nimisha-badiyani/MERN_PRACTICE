import React from 'react';
import loginpic from '../Images/signin.svg';
import { NavLink } from "react-router-dom";

const Login = () => {
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
                <form className="register-form" id="register-form">
                
                  <div className="form-group">
                    <label htmlFor="email">
                      <i class="zmdi zmdi-email"></i>
                    </label>
                    <input
                      type="text"
                      name="email"
                      id="email"
                      autocomplete="off"
                      placeholder="your Email"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="password">
                      <i class="zmdi zmdi-lock material-icons-name"></i>
                    </label>
                    <input
                      type="text"
                      name="password"
                      id="password"
                      autocomplete="off"
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

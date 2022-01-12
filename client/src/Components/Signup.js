import React from 'react';
import { NavLink } from "react-router-dom";
import authentication from "../Images/Authentication.svg"

const Signup = () => {
    return (
      <>
        <section className="signup">
          <div className="container mt-5">
            <div className="signup-content">
              <div className="signup-form">
                <h2 classname="form-title">Signup</h2>
                <form className="register-form" id="register-form">
                  <div className="form-group">
                    <label htmlFor="name">
                      <i class="zmdi zmdi-account material-icons-name"></i>
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="fname"
                      autocomplete="off"
                      placeholder="First Name"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="name">
                      <i class="zmdi zmdi-account material-icons-name"></i>
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="lname"
                      autocomplete="off"
                      placeholder="Last Name"
                    />
                  </div>

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
                    <label htmlFor="phone">
                      <i class="zmdi zmdi-phone"></i>
                    </label>
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      autocomplete="off"
                      placeholder="your Phone"
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

                  <div className="form-group">
                    <label htmlFor="cpassword">
                      <i class="zmdi zmdi-lock material-icons-name"></i>
                    </label>
                    <input
                      type="text"
                      name="cpassword"
                      id="cpassword"
                      autocomplete="off"
                      placeholder="Confirm your password"
                    />
                  </div>

                  <div className="form-group form-button">
                    <input
                      type="submit"
                      name="signup"
                      id="signup"
                      className="form-submit"
                      value="Register"
                    />
                  </div>
                </form>
              </div>
              <div classname="signup-image">
                <figure>
                  <img src={authentication} alt="registration pic" srcset="" />
                </figure>
                <NavLink to="/login" className="signup-image-link">
                  I am already register
                </NavLink>
              </div>
            </div>
          </div>
        </section>
      </>
    );
}

export default Signup;

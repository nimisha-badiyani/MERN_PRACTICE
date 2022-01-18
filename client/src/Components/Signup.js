import React, { useState } from 'react';
import { NavLink , useHistory } from "react-router-dom";
import authentication from "../Images/Authentication.svg"

const Signup = () => {
  const History = useHistory();
  const [user, setUser] = useState({
    fname: "", lname: "", email: "", phone: "", password: "", cpassword: ""
  });

  let name, value;

  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({...user, [name]:value})
  }

  const PostData = async (e) => {
    e.preventDefault();

    const { fname, lname, email, phone, password, cpassword } = user;

    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fname,
        lname,
        email,
        phone,
        password,
        cpassword,
      }),
    });

    const data = await res.json();

    if (res.status === 422 || !data) {
      window.alert("Invalid Registration");
      console.log("Invalid Registration");
    } else {
      window.alert("Registration Successfully");
      console.log("Registration successfully");

      History.push("/login");
    }

  }

    return (
      <>
        <section className="signup">
          <div className="container mt-5">
            <div className="signup-content">
              <div className="signup-form">
                <h2 classname="form-title">Signup</h2>
                <form method="POST" className="register-form" id="register-form">
                  <div className="form-group">
                    <label htmlFor="fname">
                      <i class="zmdi zmdi-account material-icons-name"></i>
                    </label>
                    <input
                      type="text"
                      name="fname"
                      id="fname"
                      autocomplete="off"
                      value={user.fname}
                      onChange={handleInputs}
                      placeholder="First Name"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="lname">
                      <i class="zmdi zmdi-account material-icons-name"></i>
                    </label>
                    <input
                      type="text"
                      name="lname"
                      id="lname"
                      autocomplete="off"
                      value={user.lname}
                      onChange={handleInputs}
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
                      value={user.email}
                      onChange={handleInputs}
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
                      value={user.phone}
                      onChange={handleInputs}
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
                      value={user.password}
                      onChange={handleInputs}
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
                      value={user.cpassword}
                      onChange={handleInputs}
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
                      onClick={PostData}
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

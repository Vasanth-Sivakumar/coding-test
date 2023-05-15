import React, { useState } from "react";
import "../css/main.css";
import { Link, useNavigate } from "react-router-dom";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();

    // To Perform Client Side validation
    if (
      email.trim() === "" ||
      password.trim() === "" ||
      confirmPassword.trim() === ""
    ) {
      alert("Please fill in all fields");
      return;
    }

    if (password !== confirmPassword) {
      alert("Password must match");
      return;
    }

    const newUser = { email, password };
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    // To Check if the user already exists in Local Storage
    const isExistingUser = existingUsers.some(
      (user) => user.email === newUser.email
    );

    if (isExistingUser) {
      alert("Account already exists with this email.");
      return;
    }

    const updatedUsers = [...existingUsers, newUser];
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    alert("Account Successfully Created");
    navigate("/login");
  };

  return (
    <div className="App">
      <div id="wrapper">
        <div className="page-wrapper auth_wrapper">
          <div className="content-area-wrapper">
            <div className="content-wrapper">
              <div className="container">
                <div className="card products_blc">
                  <div className="card-body">
                    <div className="card_content_wrap text-center">
                      <div className="logo_wrap">
                        <img src="images/thumbnails/Logo.svg" alt="logo" />
                        <h6>Create an account</h6>
                      </div>
                      <form onSubmit={handleSignUp}>
                        <div className="form_wrapper">
                          <div className="mb-4">
                            <label
                              htmlFor="exampleFormControlInput1"
                              className="form-label label_modify"
                            >
                              <span className="mendatary">*</span> Email
                            </label>
                            <input
                              type="email"
                              name="email"
                              placeholder="Enter your email"
                              className="form-control input_modify"
                              id="exampleFormControlInput1"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                            />
                          </div>
                          <div className="mb-4">
                            <label
                              htmlFor="exampleFormControlInput2"
                              className="form-label label_modify"
                            >
                              {" "}
                              <span className="mendatary">*</span> Password
                            </label>
                            <input
                              type="password"
                              placeholder="*****"
                              name="password"
                              className="form-control input_modify"
                              id="exampleFormControlInput2"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                            />
                          </div>
                          <div className="mb-4">
                            <label
                              htmlFor="exampleFormControlInput3"
                              className="form-label label_modify"
                            >
                              {" "}
                              <span className="mendatary">*</span>Confirm
                              Password
                            </label>
                            <input
                              type="password"
                              name="confirmPassword"
                              className="form-control input_modify"
                              id="exampleFormControlInput3"
                              placeholder="*****"
                              value={confirmPassword}
                              onChange={(e) =>
                                setConfirmPassword(e.target.value)
                              }
                            />
                          </div>
                          <div className="mb-0 auth_btn">
                            <button
                              type="submit"
                              className="theme-btn-primary theme-btn"
                            >
                              Sign Up
                            </button>
                          </div>
                          <div className="already">
                            {" "}
                            <Link to="/login">Already have an Account</Link>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;

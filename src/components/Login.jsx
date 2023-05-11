import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../features/actions";
import { Link, useNavigate } from 'react-router-dom';

function Login () {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
  
    // Get user data from local storage
    const usersData = JSON.parse(localStorage.getItem("users")) || [];
  
    // Find user with matching email and password
    const currentUser = usersData.find(
      (user) => user.email === email && user.password === password
    );
  
    if (currentUser) {
      // Fetch product data
      const fetchData = async () => {
        try {
          const response = await fetch(
            "https://raw.githubusercontent.com/abdulbitcot/React-Coding-Challenge-Experience/main/sample.json"
          );
          const data = await response.json();
  
          // Set the current user and product data in Redux
          const userWithProductData = {
            user: currentUser,
            productList: data,
          };
  
          dispatch(loginUser(userWithProductData));
          localStorage.setItem("productList", JSON.stringify(data));
        } catch (error) {
          console.log("Error fetching data:", error);
        }
      };
  
      fetchData();
  
      alert("Successfully logged in!");
      setEmail("");
      setPassword("");
      navigate("/product");
    } else {
      alert("Invalid email or password.");
    }
  };

  return (
    <div className="App">
      <div id="wrapper">
        <div className="page-wrapper auth_wrapper">
          <div className="content-area-wrapper">
            <div className="content-wrapper">
              <div className="container py-5">
                <div className="row justify-content-center">
                  <div className="col-md-8 py-5">
                    <div className="card products_blc">
                      <div className="card-body">
                        <div className="card_content_wrap text-center">
                          <div className="card_content_wrap text-center">
                            <div className="logo_wrap">
                              <img
                                src="images/thumbnails/Logo.svg"
                                alt="logo"
                              />
                              <h6>
                                Don't have an account yet?{" "}
                                <Link
                                  className="signUpSpan"
                                  to="/"
                                >
                                  Sign Up
                                </Link>
                              </h6>
                            </div>
                            <form onSubmit={handleSubmit}>
                              <div className="form_wrapper">
                                <div className="mb-4">
                                  <label
                                    htmlFor="email"
                                    className="form-label label_modify"
                                  >
                                    <span className="mendatary">*</span> Email
                                  </label>
                                  <input
                                    type="email"
                                    className="form-control input_modify"
                                    id="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(event) =>
                                      setEmail(event.target.value)
                                    }
                                  />
                                </div>
                                <div className="mb-4">
                                  <label
                                    htmlFor="password"
                                    className="form-label label_modify"
                                  >
                                    {" "}
                                    <span className="mendatary">*</span>{" "}
                                    Password
                                  </label>
                                  <input
                                    type="password"
                                    className="form-control input_modify"
                                    name="password"
                                    id="password"
                                    placeholder="********"
                                    value={password}
                                    onChange={(event) =>
                                      setPassword(event.target.value)
                                    }
                                  />
                                </div>
                                <div className="mb-0 auth_btn">
                                  <button
                                    type="submit"
                                    className="theme-btn-primary theme-btn"
                                  >
                                    Sign In
                                  </button>
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
        </div>
      </div>
    </div>
  );
};

export default Login;

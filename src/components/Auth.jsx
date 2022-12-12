import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


export default function () {
  let [authMode, setAuthMode] = useState("signin")

  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [authenticated, setauthenticated] = useState(localStorage.getItem("authenticated") || false);

  const users = [{ username: "1", password: "1234" }, { username: "2", password: "1" }]; //DB analog for tests :)


  const navigate = useNavigate(); //navigation for redirect on login

  const handleSubmit = (e) => {
    e.preventDefault()

    const account = users.find((user) => user.username === username);
    if (localStorage.getItem("authenticated")) {
      console.log('already logged in');
    }
    else if (account && account.password === password) {
      setauthenticated(true)
      localStorage.setItem("authenticated", true);
      console.log('authenticated');
      navigate("/menu");
    }
  };

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin")
  }

  if (authMode === "signin") {
    return (
      <div className="Auth-form-container">
        <form onSubmit={handleSubmit} className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign in</h3>
            <div className="form-group mt-3">
              <input
                type="name"
                className="form-control mt-1"
                placeholder="Username"
                onChange={(e) => setusername(e.target.value)}
              />
            </div>
            <div className="form-group mt-3">
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Password"
                onChange={(e) => setpassword(e.target.value)}
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
              <div className="text-center">
                Not registered yet?{" "}
                <span className="link-primary" onClick={changeAuthMode}>
                  Sign Up
                </span>
              </div>
            </div>

          </div>
        </form>
      </div>
    )
  }

  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign up</h3>

          <div className="form-group mt-3">
            <input
              type="name"
              className="form-control mt-1"
              placeholder="Your unique username"
            />
          </div>
          <div className="form-group mt-3">
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Your strong password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            <div className="text-center">
              Already registered?{" "}
              <span className="link-primary" onClick={changeAuthMode}>
                Sign In
              </span>
            </div>
          </div>

        </div>
      </form>
    </div>
  )
}
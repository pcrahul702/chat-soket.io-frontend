import React, { useState } from "react";
import logo from "../../src/logo.png";
import "./style.css";
import { useNavigate } from "react-router-dom";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
export const SignInPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState("");
  const SignIn = async (e) => {
    e.preventDefault();
    try {
      const auth = getAuth();
      const result = await signInWithEmailAndPassword(auth, email, password);
      console.log(result);
      console.log(result.user);
      navigate("/");
    } catch (e) {
      console.log(e);
      setError("Incorrect Username and Password");
    }
    // console.log(email, password);
  };
  const GoogleSignIn = async (e) => {
    e.preventDefault();
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      navigate("/");
    } catch (error) {
      console.log(error);
      setError("Incorrect Username and Password");
    }
  };

  return (
    <div className="container mt-4">
      <img
        src={logo}
        alt="logo"
        width={250}
        height={100}
        style={{ display: "block", margin: "auto" }}
      />
      <h2 style={{ fontWeight: 150, textAlign: "center" }}>
        Sign in To ChitChatApp
      </h2>
      {error ? (
        <div
          className="alert alert-danger"
          style={{
            margin: "auto",
            textAlign: "center",
            width: 450,
            height: 60,
          }}
        >
          <p>{error}</p>
        </div>
      ) : null}
      <div
        className="card mt-4"
        style={{
          maxWidth: 500,
          margin: "auto",
          borderColor: "hsla(210,18%,87%,1)",
          backgroundColor: "#f6f8fa",
        }}
      >
        <div className="card-body">
          <form>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                className="form-control mt-2"
                type="email"
                id="email"
                placeholder="Enter Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div className="from-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="Password"
                id="password"
                className="form-control mt-2"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <button
              className="btn btn-success form-control mt-4  "
              onClick={SignIn}
            >
              Sign In
            </button>
            <h5 className="text-center mt-2">OR</h5>
            <div>
              <button
                className="btn btn-danger form-control mt-2"
                onClick={GoogleSignIn}
              >
                Sign In with Google
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

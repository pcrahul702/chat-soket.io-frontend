import React from "react";
import { Link } from "react-router-dom";
import logo from "../../src/logo.png";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
export const NavBar = ({ user }) => {
  const navigate=useNavigate()
  const onSignout = async () => {
    try {
      await signOut(getAuth());
      navigate("/sign-in")
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <nav className="navbar border-bottom bg-light">
      <Link to="/" className="link-style">
        <img src={logo} alt="logo" className="logo-class" />
        <h5 className="app-name ms-2">ChitChat App</h5>
      </Link>
      {user ? (
        <div>
          <label className="mx-2">
            Logged In as <strong>{user.email}</strong>
          </label>
          <button className="btn btn-danger mx-2" onClick={onSignout}>
            Sign Out
          </button>
        </div>
      ) : null}
    </nav>
  );
};

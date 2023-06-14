import React, { useState } from "react";
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/Firebase";

function Register() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const register = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, inputs.email, inputs.password)
      .then(() => {
        navigate("/dashboard");
      })
      .catch((error) => alert(error.message));
  };

  const signIn = () => {
    navigate("/login");
  };

  return (
    <div className="signup">
      <div className="signup__container">
        <Link to="/">
          <img
            className="login__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/GitLab_logo.svg/2560px-GitLab_logo.svg.png"
          />
        </Link>
        <h1>Register</h1>

        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={inputs.email}
            onChange={(e) =>
              setInputs((data) => ({ ...data, email: e.target.value }))
            }
          />

          <h5>Password</h5>
          <input
            type="password"
            value={inputs.password}
            onChange={(e) =>
              setInputs((data) => ({ ...data, password: e.target.value }))
            }
          />

          <button
            type="submit"
            onClick={register}
            className="signup__registerButton"
          >
            Create your Amazon Account
          </button>
        </form>

        <p className="signup__Privacy">
          By signing-in you agree to the Sample app Conditions of Use & Sale.
          Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>

        <button onClick={signIn} className="signup__signInButton">
          Sign In
        </button>
      </div>
    </div>
  );
}

export default Register;

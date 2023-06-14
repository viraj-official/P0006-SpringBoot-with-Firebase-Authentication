import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/Firebase";

function Login() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const signIn = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, inputs.email, inputs.password)
      .then(() => {
        navigate("/dashboard");
      })
      .catch((error) => alert(error.message));
  };

  const register = () => {
    navigate("/register");
  };

  return (
    <div className="login">
      <div className="login__container">
        <div className="login__LogoContainer">
          <Link to="/">
            <img
              className="login__logo"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/GitLab_logo.svg/2560px-GitLab_logo.svg.png"
            />
          </Link>
        </div>
        <h1>Sign-in</h1>

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
            onClick={signIn}
            className="login__signInButton"
          >
            Sign In
          </button>
        </form>

        <p className="login__Privacy">
          By signing-in you agree to the Sample app Conditions of Use & Sale.
          Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>

        <button onClick={register} className="login__registerButton">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;

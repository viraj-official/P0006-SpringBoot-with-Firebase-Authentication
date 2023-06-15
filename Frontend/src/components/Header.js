import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Header.css";
import { useStateValue } from "../StateProvider";
import { auth } from "../config/Firebase";
import { Link } from "react-router-dom";

function Header() {
  const navRef = useRef();
  const [{ user }] = useStateValue();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
    showNavbar();
  };

  return (
    <div className="navbar">
      <header>
        <Link to="/">
          <img
            className="header_logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/GitLab_logo.svg/2560px-GitLab_logo.svg.png"
            alt="header_logo"
          />
        </Link>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
        <nav ref={navRef}>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
          <Link onClick={showNavbar} to="/" className="nav-element">
            <p>Home</p>
          </Link>
          {user ? (
            <Link onClick={showNavbar} to="/dashboard" className="nav-element">
              <p>Dashboard</p>
            </Link>
          ) : null}
          {user ? (
            <Link onClick={showNavbar} to="/projects" className="nav-element">
              <p>Projects</p>
            </Link>
          ) : null}
          <Link onClick={showNavbar} to="/about" className="nav-element">
            <p>About</p>
          </Link>
          {user ? (
            <Link onClick={showNavbar} to="/profile" className="nav-element">
              <p>Profile</p>
            </Link>
          ) : null}
          <Link to={!user && "/login"} className="nav-element">
            <div onClick={handleAuthenticaton} className="signin_but">
              <p>{user ? "Sign Out" : "Sign In"}</p>
            </div>
          </Link>
        </nav>
      </header>
    </div>
  );
}

export default Header;

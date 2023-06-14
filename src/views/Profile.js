import { useEffect, useState } from "react";
import "./Profile.css";
import { useStateValue } from "../StateProvider";

function Profile() {
  const [{ user }, dispatch] = useStateValue();
  const [currentUser, setCurrentUser] = useState(null);

  const copy = () => {
    navigator.clipboard.writeText(user?.accessToken);
    alert("Copy to clipboard");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8080/user/current", {
          headers: {
            Authorization: "Bearer " + user?.accessToken,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setCurrentUser(data)
        } else {
          alert("Failed to connect");
        }
      } catch (error) {
        alert("Failed to connect");
      }
    };

    fetchData();
  }, []);

  const text =
    "Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  return (
    <div className="user__page">
      <div className="user__page__container">
        <h1>Profile component</h1>
        <br />
        <div className="user__profile__data">
          <div className="user__profile__key">
            <p>User email : </p>
          </div>
          <div className="user__profile__value">
            <p>{currentUser?.email}</p>
          </div>
        </div>
        <div className="user__profile__data">
          <div className="user__profile__key">
            <p>User token : </p>
          </div>
          <div className="user__profile__value">
            <p>{user?.accessToken.slice(0, 20)}</p>
            <button onClick={copy}>Copy</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;

import { useEffect, useState } from "react";
import "./Profile.css";
import { useStateValue } from "../StateProvider";

function Profile() {
  const [{ user }] = useStateValue();
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
  }, [user]);

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

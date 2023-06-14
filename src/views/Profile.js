import { useEffect, useState } from "react";
import "./Profile.css";
import { useStateValue } from "../StateProvider";

function Profile() {
  const [{ user }, dispatch] = useStateValue();

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
            <p>{user?.email}</p>
          </div>
        </div>
        <div className="user__profile__data">
          <div className="user__profile__key">
            <p>User token : </p>
          </div>
          <div className="user__profile__value">
            <p>{user?.accessToken}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;

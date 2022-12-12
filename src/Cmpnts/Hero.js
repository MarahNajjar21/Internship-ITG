import React, { useState, useEffect } from "react";
import "./SocialCard.css";
import UserPosts from "./UserPosts";
import CardNavbar from "./CardNavbar";

const Hero = (props) => {
  const [user, setUser] = useState(null);
  const userId = props.userId;
  const a = localStorage.getItem("ID");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/users/${a}/`);
        const userData = await response.json();
        setUser(userData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserData();
  }, [userId]);

  return (
    <div>
      {user ? (
        <>
        <CardNavbar/>
         <div className="cards-container">
          <button className="user__card">
            <div className="card__username">{user.username}</div>

            <div className="card__body">
              <div>Email:{user.email} </div>
              <div>Birthdate:{user.birthDate}</div>
              <div>Gender:{user.gender}</div>
              <div>Address:{user.address.address}</div>
              <div>City:{user.address.city}</div>
              <div>Coordinates latitude:{user.address.coordinates.lat}</div>
              <div>Coordinates logitude:{user.address.coordinates.lng}</div>
              <div><UserPosts/></div>
              <div className="card__image">
                <img src={user.image} />
              </div>
            </div>
          </button>
          </div>
        </>
      ) : (
        <p>Loading User Data</p>
      )}
    </div>
  );
};

export default Hero;
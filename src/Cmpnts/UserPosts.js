import React, { useState, useEffect } from "react";
import "./SocialCard.css";

const UserPosts = (props) => {
  const [user, setUser] = useState(null);
  const userId = props.userId;
  const a = localStorage.getItem("ID");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/posts/${a}/`);
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
          <div>Title:{user.title}</div>
          <div>Tags: <div>
              {user.tags.map((tag) => (
                <p>{tag}</p>))}</div>
          </div>
        </>
      ) : (
        <p>Loading User Data</p>
      )}
    </div>
  );
};

export default UserPosts;

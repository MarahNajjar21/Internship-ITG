import React from 'react'
import { useEffect, useState } from "react";
import SocialCard from "./SocialCard";

const GetDataCard = () => {
    const [allUsers, setAllUsers] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      let userData;
      try {
        const response = await fetch("https://dummyjson.com/users");
        userData = await response.json();
      } catch (error) {
        console.log(error);
        userData = [];
      }
      setAllUsers(userData.users);
      setUsers(userData.users);
    })();
  }, []);

  //search box based on username
  const filterCards = (event) => {
    const value = event.target.value.toLowerCase();
    const filteredUsers = allUsers.filter((user) =>
      `${user.username}`.toLowerCase().includes(value)
    );
    setUsers(filteredUsers);
  };

  return (
    <div className="App">
      <h1 className="title">Roboto Application</h1>
      <input
        className="search-box"
        onInput={filterCards}
        placeholder="Search using username.."
      />
      <div className="cards-container">
        {/*using id as key as its unique */}
        {users.map((user, id) => (
          <SocialCard key={id} userData={user} />
        ))}
      </div>
    </div>
  )
}

export default GetDataCard

import React from "react";
import { useState } from "react";
import { useEffect } from "react"
import axios from "axios";
import Users from "./companents/Users";
const baseUrl = "https://jsonplaceholder.typicode.com/users";

const App = () => {
  const [users, setUsers] = useState([])

  const getUsers = async () => {
    const res = await axios(baseUrl);
    const data = res.data;
    setUsers(data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="App">
      <h1>App</h1>
      <Users users={users} />
    </div>
  )

};

export default App;

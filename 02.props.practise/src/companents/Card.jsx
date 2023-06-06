import React from "react";

const User = (obj) => {
  return (
    <div className="card">
      <h2>Name:{obj.name}</h2>
      <h3>Surname:{obj.surname}</h3>
      <h4>City:{obj.city}</h4>
    </div>
  );
};

export default User;

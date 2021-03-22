import React from "react";

const User = ({ name, age, date }) => {
  return (
    <div>
      <p>name: {name}</p>
      <p>age: {age}</p>
      <p>date: {date}</p>
    </div>
  );
};

export default User;

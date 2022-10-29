import React from "react";
import { useSelector } from "react-redux";

const Come1 = () => {
  // hello store if you want to access it used hello.it easy like this!
  const hello = useSelector(state => ({ ...state }));
  // userSumet == <name in storer (spacific)
  const { userSumet } = useSelector(state => ({ ...state }));
  console.log(userSumet);
  return (
    <div>
      <h1>page 1...</h1>
      <br />
      <h2>{userSumet.value}</h2>
      <br />
      {userSumet.loading ? <p>Loading ...</p> : <p>Loading success!</p>}
    </div>
  );
};

export default Come1;

import React from "react";

function Friends(props) {
  let { name, age, bio, image, isMinor } = props;
  let ok;

  return (
    <div
      style={{
        width: "22%",
        border: "1px solid",
        margin: "15px",
        backgroundColor: isMinor ? "red" : "green",
      }}
    >
      <p className={isMinor ? "a" : "b"}>
         {name}- {age}
      </p>
      <p>{bio}</p>
      <img src={image} alt="" width="100px" />
      <p>{isMinor ? "Not eligible" : "eligible"}</p>
    </div>
  );
}

export default Friends;

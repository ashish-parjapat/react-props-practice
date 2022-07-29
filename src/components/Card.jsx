import React from "react";
import contacts from "../contacts";

function Card(pros) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{pros.name}</h2>
        <img className="circle-img" src={pros.image} alt="avatar_img" />
      </div>
      <div className="bottom">
        <p className="info">{pros.phoneNum}</p>
        <p className="info">{pros.emailId}</p>
      </div>
    </div>
  );
}
export default Card;

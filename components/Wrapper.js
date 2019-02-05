import React from "react";

function FriendCard(props) {
  return (
    <div >
      <div >
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.word}
          </li>
          <li>
            <strong>Occupation:</strong> {props.occupation}
          </li>
          <li>
            <strong>Location:</strong> {props.location}
          </li>
        </ul>
      </div>
      <span onClick={() => props.removeData(props.id)} >
        𝘅
      </span>
    </div>
  );
}

export default FriendCard;

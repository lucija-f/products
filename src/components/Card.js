import React from "react";

function Card(props) {
  return (
    <div className="card-container">
      <div className="first-personal">
        <h2>
          {props.firstName} {props.lastName}
        </h2>
        <p>
          AGE: {props.age}&emsp;&emsp;{props.gender}
        </p>
        <p>INTERESTS: {props.interests}</p>
      </div>

      <div className="second-products">
        <p>PRODUCT RECOMMENDATION: </p>
        <p className="list-products-ele">{props.suggestions}</p>
      </div>
    </div>
  );
}

export default Card;

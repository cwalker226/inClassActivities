import React from "react";
import Card from "../Card";
import "./style.css";

function CardContainer(props) {
  return (
    <div className="jumbotron card-container">
      {/* Pass props to Card */}
      <Card image={props.image} title={props.title} profileUrl={props.profileUrl} handleClick={props.handleClick}/>
    </div>
  );
}

export default CardContainer;

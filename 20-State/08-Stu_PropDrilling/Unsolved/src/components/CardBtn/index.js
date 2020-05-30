import React from "react";
import "./style.css";

function CardBtn(props) {
  return (
    <button className={`card-btn ${props["data-value"]}`} {...props} onClick={props.handleClick}/>
  );
}

export default CardBtn;

import React, { useContext } from "react";
import GalleryContext from "../../utils/GalleryContext";

function CardImg() {
  const { image } = useContext(GalleryContext);
  return (
    <div>
      <img className="card-img" src={image} alt="user thumbnail" />
      {!image && <i className="fa fa-spinner fa-spin" aria-hidden="true" />}
    </div>
  );
}

export default CardImg;
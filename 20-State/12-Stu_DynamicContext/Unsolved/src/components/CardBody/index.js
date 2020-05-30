import React, { useContext } from "react";
import GalleryContext from "../../utils/GalleryContext";

function CardBody() {
  const { language } = useContext(GalleryContext);
  return (
    <div>
      <h4>Favorite language: {language}</h4>
    </div>
  );
}

export default CardBody;

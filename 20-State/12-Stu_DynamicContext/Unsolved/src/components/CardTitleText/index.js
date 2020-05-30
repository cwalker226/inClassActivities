import React, { useContext } from "react";
import GalleryContext from "../../utils/GalleryContext";

function CardTitleText() {
  const { title } = useContext(GalleryContext);
  return <h2>{title}</h2>;
}

export default CardTitleText;

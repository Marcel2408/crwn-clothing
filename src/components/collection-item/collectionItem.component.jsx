import React from "react";
import "./collectionItem.styles.scss";

const CollectionItem = ({ imageUrl, name, price }) => {
  const collectionItemImage = {
    backgroundImage: `url(${imageUrl})`,
  };
  return (
    <div className="collection-item">
      <div className="image" style={collectionItemImage}></div>
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
    </div>
  );
};

export default CollectionItem;

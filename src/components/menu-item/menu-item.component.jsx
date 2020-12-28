import React from "react";
import "./menu-item.styles.scss";

const menuItem = ({title, size, imageUrl}) => {
  const menuItemImage = {
    backgroundImage: `url(${imageUrl})`,
  };
  // ? bg-img div created as sibling of content, not wrapper, bc when scaling on hover we don't want the content to grow
  return (
    <div className={`menu-item ${size}`}>
    <div style={menuItemImage} className="background-image"></div>
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default menuItem;

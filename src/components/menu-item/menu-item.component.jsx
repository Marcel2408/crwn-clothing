import React from "react";
import { withRouter } from "react-router-dom";
import "./menu-item.styles.scss";

const menuItem = ({ title, size, imageUrl, linkUrl, history, match }) => {
  const menuItemImage = {
    backgroundImage: `url(${imageUrl})`,
  };
  // ? bg-img div created as sibling of content, not wrapper, bc when scaling on hover we don't want the content to grow
  return (
    <div className={`menu-item ${size}`} onClick={()=> history.push(`${match.url}${linkUrl}`)} >
      <div style={menuItemImage} className="background-image"></div>
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default withRouter(menuItem);

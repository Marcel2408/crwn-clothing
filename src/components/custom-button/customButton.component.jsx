import React from "react";
import "./customButton.styles.scss";

const CustomButton = ({
  children,
  isGoogleSignInButton,
  ...otherButtonProps
}) => (
  <button
    className={`${isGoogleSignInButton ? "googleSignIn" : ""} custom-button`}
    {...otherButtonProps}
  >
    {children}
  </button>
);

export default CustomButton;

import React from "react";
import "./formInput.styles.scss";

const FormInput = ({ label, handleChange, ...otherInputProps }) => {
  // ? shrink class creates the effect on the label when the user types
  return (
    <div className="group">
      <input className="form-input" onChange={handleChange} {...otherInputProps} />
      {label ? (
        <label
          className={`${
            otherInputProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;

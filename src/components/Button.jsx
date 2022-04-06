import React from "react";

export const Button = ({ onToggle, text }) => {
  return (
    <div className="btn-wrapper">
      <button className="btn-add btn" onClick={onToggle}>
        {text}
      </button>
    </div>
  );
};

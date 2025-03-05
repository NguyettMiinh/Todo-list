import React from "react";

const Button = ({className,onClick, content}) => {
  return (
    <div>
      <button
        className= {className}
        onClick={onClick}
      >
        {content}
      </button>
    </div>
  );
};

export default Button;

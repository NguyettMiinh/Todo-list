import React from "react";

const InputText = ({ value, type, setForm, placeholder, name, className }) => {
  return (
    <div>
      <input
        className={className}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) =>
          setForm((prev) => ({ ...prev, [name]: e.target.value }))
        }
      />
    </div>
  );
};

export default InputText;

import React from "react";

export const Input = ({ children, type, value, onChange, placeholder }) => {
  return (
    <label>
      {children}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required
      />
    </label>
  );
};

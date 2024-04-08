import React from "react";

const Input = ({ valores, onChange }) => {
  return (
    <>
      {valores.map(({ label, type, id }, i) => (
        <div key={i}>
          <label htmlFor={label}>{label}</label>
          <input
            type={type}
            name={label}
            id={id}
            onChange={(e) =>
              onChange(
                label,
                type === file ? e.target.value[0] : e.target.value
              )
            }
          />
        </div>
      ))}
    </>
  );
};

export default Input;

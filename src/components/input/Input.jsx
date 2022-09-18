import React, { useRef, forwardRef, useImperativeHandle } from "react";
import "./input.css";

const Input = forwardRef((props, ref) => {
  const { label, type = "text", name } = props;
  const inputRef = useRef();
  useImperativeHandle(ref, () => {
    return {
      getValue: () => {
        return inputRef.current.value;
      },
    };
  });

  return (
    <div>
      <label>{label}</label>
      <input
        className="user-input" 
        type={type}
        name={name}
        ref={inputRef}
        autoComplete="off"
      />
    </div>
  );
});

export default Input;

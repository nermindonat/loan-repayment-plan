import React, { useRef, forwardRef, useImperativeHandle } from "react";
import "./select.css";

const Select = forwardRef((props, ref) => {
  const { label, name, options } = props;
  const selectRef = useRef();

  useImperativeHandle(ref, () => {
    return {
      getValue: () => {
        return selectRef.current.value;
      },
    };
  });
  return (
    <div>
      <label>{label}</label>
      <select name={name} ref={selectRef}>
        {options?.map((i) => {
          return (
            <option key={i.value} value={i.value}>
              {i.label}
            </option>
          );
        })}
      </select>
    </div>
  );
});

export default Select;

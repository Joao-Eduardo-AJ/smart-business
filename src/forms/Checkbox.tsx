import React, { useEffect, useRef, InputHTMLAttributes } from "react";
import { useField } from "@unform/core";

interface CheckboxInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

const CheckboxInput = ({ name, label }: CheckboxInputProps) => {
  const { fieldName, registerField } = useField(name);
  const inputRef = useRef(null);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: ref => {
        return ref.current.value;
      },
      setValue: (ref, value) => {
        ref.current.value = value;
      },
      clearValue: ref => {
        ref.current.value = "";
      },
    });
  }, [registerField, fieldName]);

  return (
    <div className="">
      <label htmlFor={label} className="flex gap-2 text-sd1 text-neutral050">
        <input
          id={label}
          name={name}
          ref={inputRef}
          type="checkbox"
          className="w-16 h-16"
        />
        {label}
      </label>
    </div>
  );
};

export default CheckboxInput;

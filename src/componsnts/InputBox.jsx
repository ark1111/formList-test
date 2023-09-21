import React from "react";

const InputBox = ({
  label,
  value,
  type,
  fieldName,
  changeForm,
  checkNumber,
  error,
  index,
}) => {
  return (
    <div className="w-full flex">
      <div className="w-[150px] h-[50px] flex items-center">{label}:</div>
      <div className="flex-1">
        <input
          type={type}
          className="w-full h-[50px] rounded border border-black outline-none bg-transparent px-4"
          value={value}
          onChange={(e) => changeForm(e, fieldName, checkNumber)}
        />
        <div className="text-sm h-[25px] text-red-600 mt-2">
          {error &&
            error.index === index &&
            error.fieldName === fieldName &&
            error.text}
        </div>
      </div>
    </div>
  );
};

export default InputBox;

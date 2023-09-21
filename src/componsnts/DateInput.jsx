import React from "react";

const DateInput = ({ label, onChange, value, error, index = { index } }) => {
  return (
    <div className="w-full flex">
      <div className="w-[150px] h-[50px] flex items-center">{label}:</div>
      <div className="flex-1">
        <div className="w-full  h-[50px] flex items-center justify-between">
          <input
            type="number"
            className="w-[30%] h-full rounded border border-black outline-none bg-transparent text-center"
            placeholder="Year"
            value={value.yaer}
            onChange={(e) => onChange(e, "year")}
            min={1900}
          />
          <input
            type="number"
            className="w-[30%] h-full rounded border border-black outline-none bg-transparent text-center"
            placeholder="Month"
            value={value.month}
            onChange={(e) => onChange(e, "month")}
            min={1}
          />
          <input
            type="number"
            className="w-[30%] h-full rounded border border-black outline-none bg-transparent text-center"
            placeholder="Day"
            value={value.day}
            onChange={(e) => onChange(e, "day")}
            min={1}
          />
        </div>
        <div className="text-sm h-[25px]  text-red-600 mt-2">
          {error &&
            error.index === index &&
            error.fieldName === "birthday" &&
            error.text}
        </div>
      </div>
    </div>
  );
};

export default DateInput;

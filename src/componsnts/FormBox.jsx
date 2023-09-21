import React from "react";
import InputBox from "./InputBox";
import DateInput from "./DateInput";

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const FormBox = ({ index, info, formListData, setFormListData,error }) => {
  const changeForm = (e, fieldName, checkNumber) => {
    let newList = [...formListData];
    if (checkNumber) {
      if (
        numbers.includes(e.target.value[e.target.value.length - 1]) ||
        e.target.value === ""
      ) {
        newList[index][fieldName] = e.target.value;
      }
    } else {
      newList[index][fieldName] = e.target.value;
    }
    setFormListData(newList);
  };

  const changeDate = (e, fieldName) => {
    const newObj = { ...info.birthday };
    const newList = [...formListData];
    if (e.target.value > 0 || e.target.value === "") {
      if (
        (fieldName === "month" && e.target.value < 13) ||
        (fieldName === "day" && e.target.value < 32) ||
        fieldName === "year"
      ) {
        newObj[fieldName] = e.target.value;
        newList[index]["birthday"] = newObj;
        setFormListData(newList);
      }
    }
  };
  return (
    <div className="w-full mt-20">
      <div className="text-2xl">form {index + 1}:</div>
      <div className="w-full flex items-center justify-between mt-4 flex-wrap gap-y-2">
        <div className="w-[47%] shrink-0">
          <InputBox
            type="text"
            label="Firstname"
            fieldName="firstname"
            value={info.firstname}
            changeForm={changeForm}
            error={error}
            index={index}
          />
        </div>
        <div className="w-[47%] shrink-0">
          <InputBox
            type="text"
            label="Lastname"
            fieldName="lastname"
            value={info.lastname}
            changeForm={changeForm}
            error={error}
            index={index}
          />
        </div>
        <div className="w-[47%] shrink-0">
          <InputBox
            type="text"
            label="National Code"
            fieldName="nationalCode"
            value={info.nationalCode}
            changeForm={changeForm}
            checkNumber={true}
            error={error}
            index={index}
          />
        </div>
        <div className="w-[47%] shrink-0">
          <DateInput
            label="Birthday"
            value={info.birthday}
            onChange={changeDate}
            error={error}
            index={index}
          />
        </div>
      </div>
    </div>
  );
};

export default FormBox;

import { useState } from "react";
import FormBox from "./componsnts/FormBox";

function App() {
  const [formListData, setFormListData] = useState([
    {
      firstname: "",
      lastname: "",
      birthday: {
        day: "",
        month: "",
        year: "",
      },
      nationalCode: "",
    },
    {
      firstname: "",
      lastname: "",
      birthday: {
        day: "",
        month: "",
        year: "",
      },
      nationalCode: "",
    },
    {
      firstname: "",
      lastname: "",
      birthday: {
        day: "",
        month: "",
        year: "",
      },
      nationalCode: "",
    },
  ]);

  const [error, setError] = useState(null);
  const [jsonResult, setJsonResult] = useState(null);

  const submitHandler = () => {
    let nationalCodeList = [];
    let permission = true;
    for (let i = 0; i < formListData.length; i++) {
      if (formListData[i].firstname === "") {
        setError({
          index: i,
          fieldName: "firstname",
          text: "Firstname is required",
        });
        permission = false;
        break;
      } else if (formListData[i].lastname === "") {
        setError({
          index: i,
          fieldName: "lastname",
          text: "Lastname is required",
        });
        permission = false;
        break;
      } else if (formListData[i].nationalCode === "") {
        setError({
          index: i,
          fieldName: "nationalCode",
          text: "National Code is required",
        });
        permission = false;
        break;
      } else if (
        formListData[i].birthday.day === "" ||
        formListData[i].birthday.month === "" ||
        formListData[i].birthday.year === ""
      ) {
        setError({
          index: i,
          fieldName: "birthday",
          text: "Birthday  is invalid",
        });
        permission = false;
        break;
      } else if (nationalCodeList.includes(formListData[i].nationalCode)) {
        setError({
          index: null,
          fieldName: "submit",
          text: "National Code is duplicated",
        });
        permission = false;
        break;
      } else {
        nationalCodeList.push(formListData[i].nationalCode);
      }
    }

    if (permission) {
      console.log("submit---------------------------");
      console.log(formListData);
      setError(null);
      let newList = [...formListData];
      let today = new Date();
      for (let i = 0; i < newList.length; i++) {
        let birthday = new Date();
        birthday.setFullYear(
          newList[i].birthday.year,
          Number(newList[i].birthday.month) - 1,
          newList[i].birthday.day
        );
        let diff = Math.floor((today - birthday) / (1000 * 60 * 60 * 24 * 365));
        newList[i].birthday = birthday;
        newList[i]["ageCategory"] =
          diff < 2 ? "Infanc" : diff < 12 ? "Child" : "Adult";
        setJsonResult(JSON.stringify(newList));
      }
      console.log(newList);
    }
  };

  return (
    <div className="w-full p-10">
      <div className="text-4xl font-medium">FormList</div>
      {formListData.map((item, index) => (
        <div className="w-full" key={index}>
          <FormBox
            index={index}
            info={item}
            formListData={formListData}
            setFormListData={setFormListData}
            error={error}
          />
        </div>
      ))}
      <div
        className="px-10 py-4 text-xl rounded bg-black text-white cursor-pointer mt-10 cursor-pointer inline-block"
        onClick={submitHandler}
      >
        Submit
      </div>
      {error && error.fieldName === "submit" && (
        <div className="text-sm h-[25px] text-red-600 mt-2">{error.text}</div>
      )}
      {jsonResult && (
        <div className="w-full p-5 border mt-10 text-sm">{jsonResult}</div>
      )}
    </div>
  );
}

export default App;

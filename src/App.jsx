import React, { useState } from "react";
import "./App.css";

function App() {
  const [idGenerated, setID] = useState(0);
  const [inputValue, setValue] = useState("");
  const [isModify, setModify] = useState(false);
  const [modifyValue, setModifyValue] = useState("");
  const [name, setName] = useState("");
  const [isNameEntered, setIsName] = useState(false);
  const [visibility,setVis] = useState("absolute")
  const handleInputValue = () => {
    if (inputValue.length >= 1) {
      setID(idGenerated + 1);

      const maindiv = document.getElementById("childs");

      const newdiv = document.createElement("div");
      newdiv.setAttribute("id", `${idGenerated}-div`);
      newdiv.className = "todo-item";

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.id = `${idGenerated}-checkbox`;
      checkbox.className = "checkbox-input";

      newdiv.appendChild(checkbox);

      const par = document.createElement("p");
      par.setAttribute("id", `${idGenerated}-par`);
      par.textContent = inputValue;

      newdiv.appendChild(par);
      maindiv.appendChild(newdiv);

      const input2 = document.getElementById("textinput");
      input2.value = "";
      setValue("");
    } else {
      const input = document.getElementById("textinput");
      input.style.borderColor = "red";
    }
  };

  const deleteSelected = () => {
    const checkboxes = document.querySelectorAll(
      'input[type="checkbox"]:checked'
    );
    checkboxes.forEach((checkbox) => {
      const id = parseInt(checkbox.id);
      const divSelected = document.getElementById(`${id}-div`);
      if (divSelected) {
        divSelected.parentNode.removeChild(divSelected);
      }
    });
  };

  const modifySelected = () => {
    const checkboxes = document.querySelectorAll(
      'input[type="checkbox"]:checked'
    );
    checkboxes.forEach((checkbox) => {
      const id = parseInt(checkbox.id);
      const parSelected = document.getElementById(`${id}-par`);
      if (parSelected) {
        parSelected.textContent = modifyValue;
      }
      setModify(false);
    });
  };
  const inputStyle = {
    display :`${visibility}`
  }
  return (
    <>
      <div className="App">
      <div className="flex flex-col items-center justify-center h-screen"       style={inputStyle}>
  <div className="bg-gray-200 p-8 rounded-lg shadow-md">
    <h2 className="text-2xl font-bold mb-4">ENTER YOUR NAME :</h2>
    <input
      type="text"

      className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500"
      onChange={(e) => {
        setName(e.target.value);
      }}
    />
  </div>
  <div className="mt-4">
    <button
      className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none transition-all duration-300"
      onClick={() => {
        setIsName(true);
        setVis("none")
      }}
    >
      Start
    </button>
  </div>
</div>

        {isNameEntered && (
          <>
            <div className="text-center mt-[5%]">
              <h1 className="text-8xl title">TO DO LIST :</h1>
              <p className="title-child text-3xl">{name} You Can DO IT !</p>
            </div>

            <div className="shadow-md">
              <div className="text-center flex flex-wrap flex-row justify-center mt-[5%] p-8 rounded-lg ">
                <input
                  type="text"
                  className="w-[50%] bg-white rounded-lg h-[40px] border-2 border-gray-300 px-4 focus:outline-none focus:border-blue-500"
                  placeholder="Enter text here"
                  id="textinput"
                  onChange={(e) => {
                    const value = e.target.value;
                    setValue(value.toUpperCase());
                  }}
                  onClick={() => {
                    const input = document.getElementById("textinput");
                    input.style.borderColor = "blue";
                  }}
                />
                <br></br>
                <button
                  onClick={handleInputValue}
                  className="ml-4 px-6 py-2 bg-black text-white rounded-lg hover:bg-neutral-700 focus:outline-none transition-all duration-300"
                >
                  ADD
                </button>
                <button
                id="modifybutton"

                  onClick={() => {
                    const checkboxes = document.querySelectorAll(
                      'input[type="checkbox"]:checked'
                    );
                    if (checkboxes.length >= 1) {
                      setModify(true);
                    }
                  }}
                  className="ml-4 px-6 py-2 bg-black text-white rounded-lg hover:bg-neutral-700 focus:outline-none transition-all duration-300"
                >
                  MODIFY
                </button>
                <button
                id="deletebutton"

                  onClick={deleteSelected}
                  className="ml-4 px-6 py-2 bg-black text-white rounded-lg hover:bg-neutral-700 focus:outline-none transition-all duration-300"
                >
                  DELETE
                </button>
              </div>
              <div id="childs" className="text-center mt-[5%]"></div>

              {isModify && (
                <div className="flex justify-center">
                  <input
                    type="text"
                    onChange={(e) => {
                      const value = e.target.value;
                      setModifyValue(value.toUpperCase());
                    }}
                    className="w-[50%] bg-white rounded-lg h-[40px] border-2 border-gray-300 px-4 focus:outline-none focus:border-blue-500"
                    placeholder="Modify text here"
                    id="modifyinput"
                  />
                  <button
                    id="modifybutton"
                    onClick={modifySelected}
                    className="ml-4 px-6 py-2 bg-black text-white rounded-lg hover:bg-neutral-700 focus:outline-none transition-all duration-300"
                  >
                    MODIFY
                  </button>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default App;

import React, { useState } from "react";

const Form = (props) => {
  const [inputs, setInputs] = useState({ input1: "", input2: "", input3: "" });

  const handleinput1Change = (e) => {
    setInputs((prevState) => {
      return { ...prevState, input1: e.target.value };
    });
  };

  const handleinput2Change = (e) => {
    setInputs((prevState) => {
      return { ...prevState, input2: e.target.value };
    });
  };

  const handleinput3Change = (e) => {
    setInputs((prevState) => {
      return { ...prevState, input3: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSave(inputs);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex justify-center mt-7">
        <h5 className="text-xl mb-3">I have these ingredients:</h5>
        <div className="flex flex-row">
          <div>
            <input
              type="text"
              className="rounded-md ml-2 mr-2 border-gray-700 border py-2 px-3"
              onChange={handleinput1Change}
              placeholder="Enter ingredient"
              value={inputs.input1}
            />
          </div>
          <div>
            <input
              type="text"
              className="rounded-md ml-2 mr-2 border-gray-700 border py-2 px-3"
              onChange={handleinput2Change}
              placeholder="Enter ingredient"
              value={inputs.input2}
            />
          </div>
          <div>
            <input
              type="text"
              className="rounded-md ml-2 mr-2 border-gray-700 border py-2 px-3"
              onChange={handleinput3Change}
              placeholder="Enter ingredient"
              value={inputs.input3}
            />
          </div>
          <button
            className="rounded-full py-2 px-3 uppercase text-red-700 text-xs font-semibold cursor-pointer tracking-wider border-red-400 border-2 hover:bg-red-400 hover:text-white transition hover:ease-out duration-300"
            type="submit"
            value="submit"
          >
            Search for recipes
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;

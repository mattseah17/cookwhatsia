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
      <form onSubmit={handleSubmit}>
        <p>I have these ingredients:</p>
        <input
          type="text"
          onChange={handleinput1Change}
          placeholder="Enter ingredient"
          value={inputs.input1}
        />
        <input
          type="text"
          onChange={handleinput2Change}
          placeholder="Enter ingredient"
          value={inputs.input2}
        />
        <input
          type="text"
          onChange={handleinput3Change}
          placeholder="Enter ingredient"
          value={inputs.input3}
        />
        <button type="submit" value="submit">
          Search for recipes
        </button>
      </form>
    </>
  );
};

export default Form;

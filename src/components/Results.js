import React, {useState} from "react";

const Results = (props) => {
  const [instructions, setInstructions] = useState("");

  const apiKey = "f30518619f5b4aaa92944bafe8f2b949";

  const generateRecipe = async (id) => {
    if (id) {
      const instructionSrc = `https://api.spoonacular.com/recipes/${id}/analyzedInstructions?apiKey=${apiKey}`;
      const res = await fetch(instructionSrc);
      const instructionData = await res.json();
      
      setInstructions(instructionData);
    }
  };

  const clickHandler = (e) => {
    e.preventDefault();
    generateRecipe();
  }
  
  const recipes = props.data.map((d) => {
    return (
      <div id={d.id}>
        <img src={d.image} alt="" />
        <br />
        <p>{d.title}</p>
        <button type="submit" value="submit" onClick={clickHandler}>
          Click for Recipe
        </button>
      </div>
    );
  });

  return <div>{recipes}</div>;
};

export default Results;

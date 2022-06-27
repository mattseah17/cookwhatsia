import React, { useState } from "react";
import RecipeModal from "./RecipeModal";

const Results = (props) => {
  const [instruction, setInstruction] = useState([]);
  const [show, setShow] = useState(false);
  const apiKey = "f30518619f5b4aaa92944bafe8f2b949";

  const generateRecipe = async (id) => {
    const instructionSrc = `https://api.spoonacular.com/recipes/${id}/analyzedInstructions?apiKey=${apiKey}`;
    const res = await fetch(instructionSrc);
    const instructionData = await res.json();
    console.log(instructionData);
    const steps = instructionData.steps?.map((d) => <li>{d.step}</li>);
    setInstruction(steps);
    setShow(true);
  };

  const recipes = props.data.map((d) => {
    return (
      <div id={d.id} key={d.id}>
        <img src={d.image} alt="" />
        <br />
        <p>{d.title}</p>
        <button
          type="submit"
          value="submit"
          onClick={() => {
            generateRecipe(d.id);
          }}
        >
          Click for Recipe
        </button>
        <RecipeModal
          title="Instructions"
          message={instruction}
          show={show}
          onClose={() => setShow(false)}
        />
      </div>
    );
  });

  return <div>{recipes}</div>;
};

export default Results;

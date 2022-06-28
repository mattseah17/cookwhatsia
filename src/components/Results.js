import React, { useEffect, useState } from "react";
import RecipeModal from "./RecipeModal";

const Results = (props) => {
  const [instruction, setInstruction] = useState([]);
  const [wait, setWait] = useState([]);
  const [show, setShow] = useState(false);

  const apiKey = "f6e6a9203bdf48288b765dd4b7ccefc0";

  const generateRecipe = async (id) => {
    const url = `https://api.spoonacular.com/recipes/${id}/analyzedInstructions?apiKey=${apiKey}`;
    try {
      const res = await fetch(url);
      const json = await res.json();
      setWait(json[0]);
      setShow(true);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    if (wait?.steps) {
      const recipeSteps = wait.steps.map((d) => <li>{d.step}</li>);
      setInstruction(recipeSteps);
    }
  }, [wait]);

  const recipes = props.data.map((d) => {
    return (
      <>
        <div id={d.id} key={d.id}>
          <img src={d.image} alt="" />
          <br />
          <p>{d.title}</p>
          <button
            type="submit"
            value="submit"
            onClick={() => generateRecipe(d.id)}
          >
            Click for Recipe
          </button>
          {show && (
            <RecipeModal
              title="Instructions"
              message={instruction}
              show={show}
              onClose={() => setShow(false)}
            />
          )}
        </div>
      </>
    );
  });

  return <div>{recipes}</div>;
};

export default Results;

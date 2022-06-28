import React, { useEffect, useState } from "react";
import RecipeModal from "./RecipeModal";
// import styles from "./Results.module.css";

const Results = (props) => {
  const [instruction, setInstruction] = useState([]);
  const [wait, setWait] = useState([]);
  const [show, setShow] = useState(false);

  const apiKey = "f7d211772266428a8a44d76303b2db13";

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
      <div className="card d-inline-flex m-2" style={{ width: "18rem" }} id={d.id} key={d.id}>
        <img src={d.image} alt="" />
        <div class="card-body">
          <h5 class="card-title">{d.title}</h5>
          <button
            type="submit"
            value="submit"
            onClick={() => generateRecipe(d.id)}
            className="btn btn-dark"
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
      </div>
    );
  });

  return <div>{recipes}</div>;
};

export default Results;

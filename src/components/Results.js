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
      <div
        className="bg-white rounded-md overflow-hidden shadow-md hover:shadow-xl transform hover:scale-110 duration-300"
        id={d.id}
        key={d.id}
      >
        <img
          className="w-full h-32 sm:h-48 object-cover"
          src={d.image}
          alt=""
        />
        <div className="m-4">
          <h5 className="text-gray-500 font-semibold text-lg p-2">{d.title}</h5>
          <button
            className="rounded-full py-2 px-3 uppercase text-red-700 text-xs font-semibold cursor-pointer tracking-wider border-red-400 border-2 hover:bg-red-400 hover:text-white transition hover:ease-out duration-300"
            type="submit"
            value="submit"
            onClick={() => generateRecipe(d.id)}
          >
            Click for Recipe
          </button>
        </div>
        {show && (
          <RecipeModal
            title="Instructions"
            message={instruction}
            show={show}
            onClose={() => setShow(false)}
          />
        )}
      </div>
    );
  });

  return <div>{recipes}</div>;
};

export default Results;

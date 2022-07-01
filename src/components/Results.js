import React, { useEffect, useState } from "react";
import DurationBadge from "./DurationBadge";
import RecipeModal from "./RecipeModal";


const Results = (props) => {
  const [instruction, setInstruction] = useState([]);
  const [wait, setWait] = useState([]);
  const [show, setShow] = useState(false);

  const apiKey = "1323c42e825540f8b07968d149c641be";

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
        className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transform hover:scale-110 duration-300 inline-block w-1/4 h-1/5 mt-7 mb-3 ml-5 mr-5"
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
        <DurationBadge id={d.id}/>
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

  return <div className="leading-relaxed">{recipes}</div>;
};

export default Results;

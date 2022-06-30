import React, {useState} from "react";
import Form from "./Form";
import Results from "./Results";

const Main = () => {
  const [recipeData, setRecipeData] = useState([]);

  const apiKey = "f6e6a9203bdf48288b765dd4b7ccefc0";

  const generateSearch = async (input) => {
    if (input) {
      const recipeSrc = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${apiKey}&ingredients=${input.input1},+${input.input2},+${input.input3}`;
      const res = await fetch(recipeSrc);
      const recipeData = await res.json();
      setRecipeData(recipeData);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center py-3">
      <Form onSave={generateSearch} />
      <br />
      <h4 className="sticky text-3xl font-bold border-b border-gray-200">
        Recipes
      </h4>
      <div className="p-10 ml-40">
        <Results data={recipeData} />
      </div>
    </div>
  );
};

export default Main;

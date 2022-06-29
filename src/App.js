import React, { useState } from "react";
import Form from "./components/Form";
import Results from "./components/Results";

function App() {
  const [recipeData, setRecipeData] = useState([]);

  const apiKey = "f30518619f5b4aaa92944bafe8f2b949";

  const generateSearch = async (input) => {
    if (input) {
      const recipeSrc = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${apiKey}&ingredients=${input.input1},+${input.input2},+${input.input3}`;
      const res = await fetch(recipeSrc);
      const recipeData = await res.json();
      setRecipeData(recipeData);
    }
  };

  return (
    <div>
      <Form onSave={generateSearch} />
      <br />
      <h4 className="text-3xl font-bold border-b border-gray-200">Recipes</h4>
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
        <Results data={recipeData} />
      </div>
    </div>
  );
}

export default App;

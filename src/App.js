import React, { useState } from "react";
import Form from "./components/Form";
import Results from "./components/Results";

function App() {
  const [recipeData, setRecipeData] = useState([]);

  const apiKey = "f7d211772266428a8a44d76303b2db13";

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
      <br />
      <Results data={recipeData} />
    </div>
  );
}

export default App;

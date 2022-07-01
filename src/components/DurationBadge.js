import React, { useEffect, useState } from "react";

const DurationBadge = (props) => {
  const [duration, setDuration] = useState("");
  const apiKey = "1323c42e825540f8b07968d149c641be";

  useEffect(() => {
    const fetchInfo = async () => {
      const recipeInfo = `https://api.spoonacular.com/recipes/${props.id}/information?apiKey=${apiKey}&includeNutrition=false`;
      try {
        const res = await fetch(recipeInfo);
        const infoJson = await res.json();
        setDuration(infoJson.readyInMinutes);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchInfo();
  }, [props.id]);
  return (
    <div className="bg-amber-100 text-amber-600 text-xs uppercase font-semibold rounded-lg p-2 absolute top-1 left-1 opacity-75">
      <svg
        className="w-4 inline-block"
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <span className="pl-1">{duration} min</span>
    </div>
  );
};

export default DurationBadge;

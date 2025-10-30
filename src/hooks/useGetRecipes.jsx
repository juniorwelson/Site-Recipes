import { useState } from "react";
import DataRecipes from "../data/DataRecipes";

export function useGetRecipes() {
  const [SearchText, setSearchText] = useState("");

  const handleChangeText = (e) => {
    setSearchText(e.target.value);
  };

const filterRecipes = () => {
  return DataRecipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(SearchText.trim().toLowerCase())
  );
};

    
  return { SearchText, handleChangeText, filterRecipes };
};

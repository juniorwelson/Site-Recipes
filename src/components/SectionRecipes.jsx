import SearchRecipes from "./SearchRecipes";
import "./SectionRecipes.css";

import { useGetRecipes } from "../hooks/useGetRecipes";
import { Link } from "react-router-dom";
const SectionRecipes = () => {
  const { SearchText, handleChangeText, filterRecipes } = useGetRecipes("");
  const filtered = filterRecipes();
  const limitedFilter = filtered.slice(0, 3);
  return (
    <section>
      <SearchRecipes
        SearchText={SearchText}
        handleChangeText={handleChangeText}
      />
      <div
        className="container-fluid flex-wrap pages-recipes   mt-5"
        id="foods"
      >
        <div className="card-flex">
          {limitedFilter.length > 0 ? (
            limitedFilter.map((recipe, index) => (
              <div key={index} className="card mt-3">
                <img
                  src={recipe.image}
                  className="card-img-top"
                  alt="logo-recipes"
                />
                <div className="card-body">
                  <h3 className="card-title">{recipe.name}</h3>
                  <p className="card-text">{recipe.message}</p>
                  <Link to={`/recipes/${recipe.id}`} className="btn">
                    Ver Receita Completa
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p className="pt-5 fw-bold">NENHUMA RECEITA ENCONTRADA</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default SectionRecipes;

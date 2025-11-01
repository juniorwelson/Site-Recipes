import "./Recipes.css";
import dataRecipes from "../data/DataRecipes";
import { Link } from "react-router-dom"; 

const Recipes = () => {
  return (
    <div>
      <div className="container-fluid flex-wrap pages-recipes mt-5">
        <div className="card-flex">
          {dataRecipes.map((recipe, index) => (
            <div key={index} className="card mt-3">
              <img
                src={recipe.image}
                className="card-img-top"
                alt={recipe.name}
              />
              <div className="card-body">
                <h3 className="card-title">{recipe.name}</h3>
                <p className="card-text">{recipe.message}</p>
                <Link to={`/recipes/${recipe.id}`} className="btn">
                  Ver receita completa
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recipes;

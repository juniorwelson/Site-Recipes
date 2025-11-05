import "./SearchRecipes.css";
const SearchRecipes = ({SearchText,handleChangeText}) => {

  return (
    <div className="search-bar d-flex justify-content-center aligns-center">
      <label htmlFor="bar">
        Digite o Nome de sua Receita
        <input
          type="search"
          placeholder="Busque sua Receita"
          name="search-recipes"
          id="bar"
          value={SearchText}
          onChange={handleChangeText}
        />
        <img
          src="/Site-Recipes/img/lupa.png"
          alt="lupa"
          className="logo-lupa"
        />
      </label>
    </div>
  );
};

export default SearchRecipes;


import { Link } from "react-router-dom";
import "./LinkOptions.css"
const LinkOptions = ({ handlePdfRecipe }) => {
  return (
    <div className="Link-options d-flex justify-content-center align-items-center gap-5 flex-wrap">
      <Link to="/recipes" className="fw-bold">
        Voltar as Receitas
        <img
          src="/Site-Recipes/img/salada-icon.png"
          className="salada-icon"
          alt="salada-icon"
        />
      </Link>

      <button onClick={handlePdfRecipe} id="btn-downlod " className="fw-bold">
        Baixar Receita{" "}
        <img
          src="/Site-Recipes/img/logo-pdf.png"
          alt="logo pdf"
          id="logo-pdf"
        />
      </button>
    </div>
  );
};

export default LinkOptions

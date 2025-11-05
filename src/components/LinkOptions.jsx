

import "./LinkOptions.css"
const LinkOptions = ({ handlePdfRecipe }) => {
  return (
    <div className="Link-options d-flex justify-content-center align-items-center gap-5 flex-wrap">
      <a href="/recipes" className="fw-bold">
        Voltar as Receitas
        <img
          src="/Site-Recipes/public/img/salada-icon.png"
          className="salada-icon"
          alt="salada-icon"
        />
      </a>

      <button onClick={handlePdfRecipe} id="btn-downlod " className="fw-bold">
        Baixar Receita{" "}
        <img
          src="/Site-Recipes/public/img/logo-pdf.png"
          alt="logo pdf"
          id="logo-pdf"
        />
      </button>
    </div>
  );
};

export default LinkOptions

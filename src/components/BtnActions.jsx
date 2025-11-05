import "./BtnActions.css"
import { Link } from "react-router-dom";


const BtnActions = () => {
  return (
    <div className="links-action d-flex flex-wrap  ">
      <a href="#foods" className="link ">
        Ache Suas Receitas
        <img
          src="/Site-Recipes/img/lupa.png"
          className="lupa"
          alt="lupa"
        />
      </a>

      <Link to="/recipes" className="link ">
        Ver Todas as Receitas
        <img
          src="/Site-Recipes/img/salada-icon.png"
          className="salada-icon"
          alt="salada-icon"
        />
      </Link>
    </div>
  );
}

export default BtnActions

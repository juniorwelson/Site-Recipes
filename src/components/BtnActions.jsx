import "./BtnActions.css"



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

      <a href="/recipes" className="link ">
        Ver Todas as Receitas
        <img
          src="/Site-Recipes/img/salada-icon.png"
          className="salada-icon"
          alt="salada-icon"
        />
      </a>
    </div>
  );
}

export default BtnActions

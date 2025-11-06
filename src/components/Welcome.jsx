import "./Welcome.css"
import BtnActions from "./BtnActions";

const Welcome = () => {
    return (
      <div className="container-box mt-1 ">
        <div className="main-title ">
          <h1 id="text-main">“Seja Seu Próprio MasterChef — ”</h1>
          <p className="subtitle">
            Crie, cozinhe, experimente e aproveite cada receita.
          </p>
        </div>

        <div className="actions ">
          <BtnActions />
        </div>
      </div>
    );
}

export default Welcome

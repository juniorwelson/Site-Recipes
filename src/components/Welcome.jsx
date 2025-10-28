import "./Welcome.css"
import BtnActions from "./BtnActions";

const Welcome = () => {
    return (
      <div className="container-box mt-1 ">
        <div className="main-content d-flex justify-content-center align-items-center flex-wrap">
          <div className="main-title">
            <h1 id="text-main">
              “Todo mundo pode fazer comida caseira incrível —
              <span>você também!</span> ”
            </h1>
          </div>

          <img src="/img/food-salads.png" alt=" logo-main" id="logo-main" />
        </div>
        <div className="actions">
          <BtnActions />
        </div>
      </div>
    );
}

export default Welcome

import { useParams } from "react-router-dom";
import dataRecipes from "../data/DataRecipes";
import LinkOptions from "../components/LinkOptions";
import html2pdf from "html2pdf.js";
import "./RecipeDetail.css"

const RecipeDetail = () => {
  const { id } = useParams();
  const recipe = dataRecipes.find((r) => r.id === Number(id));
  

  if (!recipe) return <p>Receita não encontrada</p>;

  const handlePdfRecipe = () => {
    const element = document.getElementById("recipe-pdf");
    element.classList.add("pdf-mode");
    const opt = {
      margin: 0.5,
      filename: `${recipe.name}.pdf`,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
    };
    html2pdf().set(opt).from(element).save().then(() => { element.classList.remove("pdf-mode"); });
  };

  return (
    <div className="recipe-detail  mt-4">
      <div id="recipe-pdf">
        <h1 className="title text-center">{recipe.name}</h1>
        <img
          src={recipe.image}
          alt={recipe.name}
          className=" picture-main rounded"
        />

        <div className="container-details mt-4 d-flex justify-content-around align-items-center   flex-wrap">
          <div className="ingredients  ">
            <h2>Ingredientes</h2>
            <ul>
              {recipe.ingredientes.map((item, index) => (
                <li className="text-white fw-bold" key={index}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="steps ">
            <h2>Modo de preparo</h2>
            <ol>
              {recipe.modo_de_preparo.map((step, index) => (
                <li className="text-white fw-bold" key={index}>
                  {step}
                </li>
              ))}
            </ol>
          </div>
          <div className="time">
            <p className="fw-bold">Porções: {recipe.porcoes}</p>
            <p className="fw-bold">Tempo de preparo: {recipe.tempo_preparo}</p>
          </div>
        </div>
      </div>
      <LinkOptions handlePdfRecipe={handlePdfRecipe} />
    </div>
  );
  
};

export default RecipeDetail;

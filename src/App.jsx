// importando componentes
import Navbar from "./components/Navbar";

import FooterRecipe from "./components/FooterRecipe";

// importando pages
import Recipes from "./pages/Recipes";
import Home from "./pages/Home"
import RecipeDetail from "./pages/RecipeDetail";

// importando arquivos de configuração
import { BrowserRouter, Routes, Route } from "react-router-dom";


import "./App.css";


function App() {
  return (
    <BrowserRouter>
      <Navbar branding="DevReceitas" home="Home" recipes="Receitas" />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
       
        <Route path="/recipes/:id" element={<RecipeDetail />} />
      </Routes>
      <FooterRecipe />
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./containers/Home/HomePage.js";
import ProductListPage from "./containers/ProductList/ProductListPage.js";

function App() {
   return (
      <div>
         <BrowserRouter>
            <Routes>
               <Route path="/" element={<HomePage />} />
               <Route path="/:slug" element={<ProductListPage />} />
            </Routes>
         </BrowserRouter>
      </div>
   );
}

export default App;

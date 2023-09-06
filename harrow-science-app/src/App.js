import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./pages/home";
import Clinical from "./pages/clinical-data";
import Investigator from "./pages/investigator";
import Medinfo from "./pages/med-info";
import Char from "./pages/char-grant";

const App=()=>{
   return(
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>} />
         <Route path="/clinicaldata" element={<Clinical/>} />
         <Route path="/iit" element={<Investigator/>} />
         <Route path="/medinfo" element={<Medinfo/>} />
         <Route path="/charitablegrant" element={<Char/>} />
      </Routes>
      </BrowserRouter>
   )
}
export default App

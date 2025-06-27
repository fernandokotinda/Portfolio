// src/AppRoutes.tsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChoosePortfolio from "./ChoosePortfolio";
import FernandoPortfolio from "../fernando/Portfolio";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ChoosePortfolio />} />
        <Route path="/murilo/*" element={<MuriloPortfolio />} />
        <Route path="/fernando" element={<FernandoPortfolio />} />
      </Routes>
    </BrowserRouter>
  );
}

// Componente para redirecionar para o Laravel
function MuriloPortfolio() {
  React.useEffect(() => {
    window.location.href = '/murilo';
  }, []);
  
  return <div>Redirecionando para o portfolio do Murilo...</div>;
}

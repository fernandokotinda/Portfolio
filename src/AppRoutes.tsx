// src/AppRoutes.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChoosePortfolio from "./ChoosePortfolio";
import FernandoPortfolio from "./fernando/Portfolio";
import MuriloRedirect from "./components/MuriloRedirect";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ChoosePortfolio />} />
        <Route path="/murilo/*" element={<MuriloRedirect />} />
        <Route path="/fernando" element={<FernandoPortfolio />} />
      </Routes>
    </BrowserRouter>
  );
}

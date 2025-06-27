// src/AppRoutes.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChoosePortfolio from "./ChoosePortfolio";
import FernandoPortfolio from "../fernando/Portfolio";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ChoosePortfolio />} />
        {/* <Route path="/murilo" element={} /> */}
        <Route path="/fernando" element={<FernandoPortfolio />} />
      </Routes>
    </BrowserRouter>
  );
}

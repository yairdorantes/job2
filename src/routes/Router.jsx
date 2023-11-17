import { Route, Routes } from "react-router-dom";
import MainContent from "../components/MainContent";
import RegisterTable from "../components/RegisterTable";
import QRScanner from "../components/QRScanner";
import Csv from "../components/Csv";

const Router = () => {
  return (
    <Routes>
      <Route path="/:location/:form" element={<MainContent />} />
      <Route path="/invitados" element={<RegisterTable />} />
      <Route path="/scanner" element={<QRScanner />} />
      <Route path="/csv" element={<Csv />} />
    </Routes>
  );
};

export default Router;

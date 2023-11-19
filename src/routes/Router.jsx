import { Route, Routes } from "react-router-dom";
import MainContent from "../components/MainContent";
import RegisterTable from "../components/RegisterTable";
import QRScanner from "../components/QRScanner";
import Csv from "../components/Csv";
import Exportcsv from "../components/Exportcsv";

const Router = () => {
  return (
    <Routes>
      <Route path="/:location" element={<MainContent />} />
      <Route path="/:location/invitados" element={<RegisterTable />} />
      <Route path="/scanner" element={<QRScanner />} />
      <Route path="/csv" element={<Csv />} />
      <Route path="/export" element={<Exportcsv />} />
    </Routes>
  );
};

export default Router;

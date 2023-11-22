import { Route, Routes } from "react-router-dom";
import MainContent from "../components/MainContent";
import RegisterTable from "../components/RegisterTable";
import QRScanner from "../components/QRScanner";
import Csv from "../components/Csv";
import Exportcsv from "../components/Exportcsv";
import Page404 from "../components/Page404";
const Router = () => {
  return (
    <Routes>
      <Route path="/:location" element={<MainContent />} />
      <Route path="/:location/invitados" element={<RegisterTable />} />
      <Route path="/scanner" element={<QRScanner />} />
      <Route path="/csv" element={<Csv />} />
      <Route path="/export" element={<Exportcsv />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};

export default Router;

import { Route, Routes } from "react-router-dom";
import Example from "../components/Example";
import MainContent from "../components/MainContent";
import RegisterTable from "../components/RegisterTable";
import QRScanner from "../components/QRScanner";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainContent />} />
      <Route path="/invitados" element={<RegisterTable />} />
      <Route path="/scanner" element={<QRScanner />} />
    </Routes>
  );
};

export default Router;

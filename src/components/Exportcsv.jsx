import { mkConfig, generateCsv, download } from "export-to-csv";
import csvPng from "../media/csv.png";
import { useState } from "react";
import toast from "react-hot-toast";
const Exportcsv = ({ Data = [] }) => {
  const [isLoading, setIsLoading] = useState(false);
  const csvConfig = mkConfig({ useKeysAsHeaders: true });

  const locationDetail = (key) => {
    switch (key) {
      case 1:
        return "Lerma";
      case 2:
        return "Santiago/Santa cruz";
      case 3:
        return "Cadereyta";
      case 4:
        return "Division FX";
      default:
        return "S/D";
    }
  };
  const valueIsEmpty = (string) => {
    if (string === "") {
      return "S/D";
    } else {
      return string;
    }
  };
  function replaceSpecialCharacter(inputString) {
    const replacedString = inputString.replace(/�/g, "Ñ");
    return replacedString;
  }
  const attendaceDetail = (key) => {
    switch (key) {
      case 0:
        return "Pendiente";
      case 1:
        return "Confirmada";
      case 2:
        return "Asisitio";
      default:
        return "S/D";
    }
  };

  // console.log(editedData);
  const handleExportCSV = () => {
    setIsLoading(true);
    try {
      const editedData = Data.map((employee) => {
        const data = {
          empleado: employee.employee,
          nombre: replaceSpecialCharacter(employee.name),
          asistencia: attendaceDetail(employee.asistencia),
          area: valueIsEmpty(employee.area),
          puesto: valueIsEmpty(employee.position),
          correo: employee.email,
          celular: employee.phone,
          planta: locationDetail(employee.location),
        };
        return data;
      });
      const csv = generateCsv(csvConfig)(editedData);
      download(csvConfig)(csv);
    } catch (error) {
      toast.error("Ups algo salio mal");
    }
    setIsLoading(false);
  };

  return (
    <>
      <button
        className="btn btn-outline btn-success"
        onClick={!isLoading && handleExportCSV}
      >
        {isLoading ? (
          <>
            <span className="loading loading-spinner"></span>
            cargando
          </>
        ) : (
          <>
            <div>Exportar</div>
            <div>
              <img className="w-7" src={csvPng} alt="" />
            </div>
          </>
        )}
      </button>
    </>
  );
};

export default Exportcsv;

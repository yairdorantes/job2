import axios from "axios";
import { api } from "../api";
import { useEffect, useState } from "react";

const RegisterTable = () => {
  const [attendees, setAttendees] = useState([]);
  const getAttendees = () => {
    axios
      .get(`${api}/colabs`)
      .then((res) => {
        console.log(res);
        setAttendees(res.data.colabs);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getAttendees();
  }, []);

  return (
    <div>
      <div className="w-lg sm:w-10/12 mx-auto mt-10 ">
        <div className="font-cinzel font-bold text-center mb-10">
          Inivitados Registrados
        </div>
        <div className="overflow-x-auto">
          <table data-theme="garden" className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th>No. Empleado</th>
                <th>Nombre</th>
                <th>Puesto</th>
                <th>Area</th>
                <th>Asistencia</th>
              </tr>
            </thead>
            <tbody>
              {/* row  */}
              {attendees.map((colab, i) => (
                <tr key={i}>
                  <th>{colab.employee}</th>
                  <td>
                    {colab.name} {colab.lastname}
                  </td>
                  <td>{colab.position}</td>
                  <td>{colab.area}</td>
                  <td className="text-center">
                    <div
                      data-theme="night"
                      className={`badge badge-outline font-bold ${
                        colab.asistencia === 0
                          ? "badge-neutral"
                          : colab.asistencia === 1
                          ? "badge-info"
                          : colab.asistencia === 2
                          ? "badge-success"
                          : ""
                      }`}
                    >
                      {(() => {
                        switch (colab.asistencia) {
                          case 0:
                            return "Pendiente";
                          case 1:
                            return "Confirmada";
                          case 2:
                            return "Asistio";
                          default:
                            return null;
                        }
                      })()}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RegisterTable;

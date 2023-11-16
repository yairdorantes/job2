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
      <div className="max-w-lg sm:w-10/12 mx-auto mt-10 ">
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
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {attendees.map((colab, i) => (
                <tr key={i}>
                  <th>{colab.id}</th>
                  <td>
                    {colab.name} {colab.lastname}
                  </td>
                  <td>Gerente tejido</td>
                  <td>Tejido</td>
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

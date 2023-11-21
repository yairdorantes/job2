import axios from "axios";
import { api, locations } from "../api";
import { useEffect, useState } from "react";
import Modal from "./Modal";
import Exportcsv from "./Exportcsv";

const RegisterTable = () => {
  const [attendees, setAttendees] = useState([]);
  const [locationID, setLocationID] = useState(0);
  const getAttendees = (location = 0) => {
    axios
      .get(`${api}/colabs/${location}`)
      .then((res) => {
        console.log(res);
        setAttendees(res.data.colabs);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  function replaceSpecialCharacter(inputString) {
    const replacedString = inputString.replace(/�/g, "Ñ");
    return replacedString;
  }

  useEffect(() => {
    let locationID;
    let path = window.location.href;
    if (path.includes(locations.lerma)) {
      locationID = 0;
      // setLocationID(1);
    } else if (
      path.includes(locations.santiago) | path.includes(locations.cruz)
    ) {
      locationID = 2;
      // setLocationID(2);
    } else if (path.includes(locations.cadereyta)) {
      // setLocationID(3);
      locationID = 3;
    } else if (
      path.includes(locations.division) | path.includes(locations.fx)
    ) {
      locationID = 4;
      // setLocationID(4);
    }
    getAttendees(locationID);
  }, []);

  return (
    <div>
      <Modal />
      <div className="w-lg sm:w-10/12 mx-auto mt-10 ">
        <div className="font-monsterrat font-bold text-center mb-10">
          {/* <div>Inivitados Registrados</div> */}
          <div className="mt-2">
            <Exportcsv Data={attendees} />
          </div>
        </div>
        <div className="overflow-x-auto">
          <table data-theme="garden" className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th>Empleado ID</th>
                <th>Nombre</th>
                <th>Puesto</th>
                <th>Area</th>
                <th className="text-center">Asistencia</th>
              </tr>
            </thead>
            <tbody>
              {attendees.map((colab, i) => (
                <tr key={i}>
                  <th>{colab.employee}</th>
                  <td>{replaceSpecialCharacter(colab.name)}</td>
                  <td>{colab.position === "" ? "S/D" : colab.position}</td>
                  <td>{colab.area === "" ? "S/D" : colab.area}</td>
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

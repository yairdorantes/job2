import axios from "axios";
import { api, locations } from "../api";
import { useEffect, useState } from "react";
import Modal from "./Modal";
import Exportcsv from "./Exportcsv";
// import bg from "../media/bglex.jpg";
const RegisterTable = () => {
  const [attendees, setAttendees] = useState([]);
  const [pendingS, setPendingS] = useState(0);
  const [confirmS, setConfirmS] = useState(0);
  const [attendingS, setAttendingS] = useState(0);
  // const [locationID, setLocationID] = useState(0);
  const getAttendees = (location = 0) => {
    let attending = 0,
      pending = 0,
      confirm = 0;
    axios
      .get(`${api}/colabs/${location}`)
      .then((res) => {
        console.log(res);
        setAttendees(res.data.colabs);
        res.data.colabs.forEach((item) => {
          if (item.asistencia === 0) {
            pending += 1;
          } else if (item.asistencia === 1) {
            confirm += 1;
          } else if (item.asistencia === 2) {
            attending += 1;
          }
        });
        setPendingS(pending);
        setAttendingS(attending);
        setConfirmS(confirm);
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
      locationID = 1;
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
    <div className="">
      {/* <Modal /> */}
      <div className="w-lg sm:w-10/12 mx-auto mt-10 ">
        <div className="mt-2 text-center">
          <Exportcsv Data={attendees} />
        </div>
        <div className="stats shadow">
          <div className="stat">
            <div className="stat-figure text-primary">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                height="2em"
                width="2em"
              >
                <path d="M2 3h20c1.05 0 2 .95 2 2v14c0 1.05-.95 2-2 2H2c-1.05 0-2-.95-2-2V5c0-1.05.95-2 2-2m12 3v1h8V6h-8m0 2v1h8V8h-8m0 2v1h7v-1h-7m-6 3.91C6 13.91 2 15 2 17v1h12v-1c0-2-4-3.09-6-3.09M8 6a3 3 0 00-3 3 3 3 0 003 3 3 3 0 003-3 3 3 0 00-3-3z" />
              </svg>
            </div>
            <div className="stat-title text-gray-100">Total </div>
            <div className="stat-value text-primary">{attendees.length}</div>
            {/* <div className="stat-desc">21% more than last month</div> */}
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                fill="currentColor"
                viewBox="0 0 16 16"
                height="2em"
                width="2em"
                className="text-success"
              >
                <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 100-6 3 3 0 000 6z" />
                <path
                  fillRule="evenodd"
                  d="M5.216 14A2.238 2.238 0 015 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 005 9c-4 0-5 3-5 4s1 1 1 1h4.216z"
                />
                <path d="M4.5 8a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
              </svg>
            </div>
            <div className="stat-title text-gray-200">Asistentes</div>
            <div className="stat-value text-success">{attendingS}</div>
            {/* <div className="stat-desc">21% more than last month</div> */}
          </div>
          <div className="stat">
            <div className="stat-figure text-info">
              <svg
                fill="currentColor"
                viewBox="0 0 16 16"
                height="2em"
                width="2em"
              >
                <path d="M4 .5a.5.5 0 00-1 0V1H2a2 2 0 00-2 2v1h16V3a2 2 0 00-2-2h-1V.5a.5.5 0 00-1 0V1H4V.5zM16 14V5H0v9a2 2 0 002 2h12a2 2 0 002-2zm-5.146-5.146l-3 3a.5.5 0 01-.708 0l-1.5-1.5a.5.5 0 01.708-.708L7.5 10.793l2.646-2.647a.5.5 0 01.708.708z" />
              </svg>
            </div>
            <div className="stat-title text-gray-100">Confirmados</div>
            <div className="stat-value text-info">{confirmS}</div>
            {/* <div className="stat-desc">21% more than last month</div> */}
          </div>
          <div className="stat">
            <div className="stat-figure text-error">
              <svg
                viewBox="0 0 640 512"
                fill="currentColor"
                height="2em"
                width="2em"
              >
                <path d="M224 256c-70.7 0-128-57.3-128-128S153.3 0 224 0s128 57.3 128 128-57.3 128-128 128zm-45.7 48h91.4c20.6 0 40.4 3.5 58.8 9.9C323 331 320 349.1 320 368c0 59.5 29.5 112.1 74.8 144H29.7C13.3 512 0 498.7 0 482.3 0 383.8 79.8 304 178.3 304zM640 368c0 79.5-64.5 144-144 144s-144-64.5-144-144 64.5-144 144-144 144 64.5 144 144zm-144-80c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16s-7.2-16-16-16h-32v-48c0-8.8-7.2-16-16-16z" />
              </svg>
            </div>
            <div className="stat-title text-gray-100">Pendiente</div>
            <div className="stat-value text-error">{pendingS}</div>
            {/* <div className="stat-desc">21% more than last month</div> */}
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
                      data-theme="dark"
                      className={`badge font-semibold ${
                        colab.asistencia === 0
                          ? "badge-error"
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

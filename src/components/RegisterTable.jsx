import axios from "axios";
import { api, locations } from "../api";
import { useEffect, useState } from "react";
import Modal from "./Modal";
import Exportcsv from "./Exportcsv";
import ModalAdd from "./ModalAdd";
import { useToggleList } from "../myHooks/ListToogle";
import toast from "react-hot-toast";
import useStore from "../Context";

// import bg from "../media/bglex.jpg";
const RegisterTable = () => {
  const [attendees, setAttendees] = useState([]);
  const [pendingS, setPendingS] = useState(0);
  const { changeLocation } = useStore();

  const [confirmS, setConfirmS] = useState(0);
  const [taxis, setTaxis] = useState(0);
  const [peopleTaxi, setPeopleTaxi] = useState(0);
  const [attendingS, setAttendingS] = useState(0);
  const { list, toggleList } = useToggleList();
  const [locationID, setLocationID] = useState(0);
  const getAttendees = (location = 0) => {
    let attending = 0,
      pending = 0,
      confirm = 0,
      cabs = 0;
    axios
      .get(`${api}/colabs/${location}`)
      .then((res) => {
        console.log(res);
        const sortedColabs = res.data.colabs.sort(
          (a, b) => b.asistencia - a.asistencia
        );
        setAttendees(sortedColabs);
        res.data.colabs.forEach((item) => {
          console.log(item.taxi);
          item.taxi && cabs++;
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
        setTaxis(Math.ceil(cabs / 4));
        setPeopleTaxi(cabs);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const delItems = () => {
    axios
      .delete(`${api}/colabs`, { data: { list_colabs: list } })
      .then((res) => {
        console.log(res);
        toast.success("Eliminados exitosamente");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Ops algo salió mal");
      })
      .finally(() => {
        document.getElementById("my_modal_4").close();
        getAttendees(locationID);
      });
  };
  // function replaceSpecialCharacter(inputString) {
  //   const replacedString = inputString.replace(/�/g, "Ñ");
  //   return replacedString;
  // }
  useEffect(() => {
    let locationID;
    let path = window.location.href;
    if (path.includes(locations.lerma)) {
      locationID = 1;
      setLocationID(1);
      changeLocation(1);
    } else if (
      path.includes(locations.santiago) | path.includes(locations.cruz)
    ) {
      locationID = 2;
      setLocationID(2);
      changeLocation(2);
    } else if (path.includes(locations.cadereyta)) {
      setLocationID(3);
      locationID = 3;
      changeLocation(3);
    } else if (
      path.includes(locations.division) | path.includes(locations.fx)
    ) {
      locationID = 4;
      setLocationID(4);
      changeLocation(4);
    }
    getAttendees(locationID);
  }, []);

  return (
    <div className="">
      {/* <Modal /> */}
      <ModalAdd getData={getAttendees} />
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <div id="">
        <dialog id="my_modal_4" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Remover</h3>
            <p className="py-4">Se eliminaran {list.length} registros</p>
            <div className="flex justify-center gap-10">
              <button
                onClick={() => document.getElementById("my_modal_4").close()}
                className="btn btn-warning"
              >
                Cancelar
              </button>
              <button onClick={delItems} className="btn btn-success">
                Aceptar
              </button>
            </div>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      </div>

      <div className="w-lg sm:w-10/12 mx-auto mt-10 ">
        <div className="mt-2 text-center">
          <Exportcsv Data={attendees} />
        </div>
        <div className="stats shadow w-[24rem]  sm:w-3/4">
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
            <div className="stat-figure text-warning">
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                height="2em"
                width="2em"
              >
                <path d="M12 3h2l4 7h1a1 1 0 011 1 1 1 0 01-1 1h-1v6a1 1 0 01-1 1h-1a1 1 0 01-1-1v-1H5v1a1 1 0 01-1 1H3a1 1 0 01-1-1v-6H1a1 1 0 01-1-1 1 1 0 011-1h1l4-7h2V1h4v2zm3.86 7L13 5H7l-2.86 5h11.72zM5.5 15a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm9 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
              </svg>
            </div>
            <div className="stat-title text-gray-100">Taxis</div>
            <div className="stat-value text-warning">{taxis}</div>
            <div className="stat-desc text-white">{peopleTaxi} personas</div>
          </div>
          {/* <div className="stat">
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
            <div className="stat-desc">21% more than last month</div>
          </div> */}
        </div>
        <div>
          <div className="flex gap-5 m-2 justify-end">
            <button
              onClick={() => document.getElementById("my_modal_1").showModal()}
            >
              <svg
                viewBox="0 0 16 16"
                fill="currentColor"
                height="1em"
                width="1em"
                className="w-8 h-8 text-success"
              >
                <path
                  fill="currentColor"
                  d="M6 11.5a5.508 5.508 0 013.594-5.159A4.574 4.574 0 0010 4.5C10 2.015 10 0 7 0S4 2.015 4 4.5c0 1.548.898 3.095 2 3.716v.825C2.608 9.318 0 10.985 0 13h6.208A5.5 5.5 0 016 11.5z"
                />
                <path
                  fill="currentColor"
                  d="M11.5 7a4.5 4.5 0 100 9 4.5 4.5 0 000-9zm2.5 5h-2v2h-1v-2H9v-1h2V9h1v2h2v1z"
                />
              </svg>
            </button>
            {list.length > 0 && (
              <button
                onClick={() =>
                  document.getElementById("my_modal_4").showModal()
                }
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  height="1em"
                  className="w-8 h-8 text-error"
                  width="1em"
                >
                  <path d="M2.5 1a1 1 0 00-1 1v1a1 1 0 001 1H3v9a2 2 0 002 2h6a2 2 0 002-2V4h.5a1 1 0 001-1V2a1 1 0 00-1-1H10a1 1 0 00-1-1H7a1 1 0 00-1 1H2.5zm3 4a.5.5 0 01.5.5v7a.5.5 0 01-1 0v-7a.5.5 0 01.5-.5zM8 5a.5.5 0 01.5.5v7a.5.5 0 01-1 0v-7A.5.5 0 018 5zm3 .5v7a.5.5 0 01-1 0v-7a.5.5 0 011 0z" />
                </svg>
              </button>
            )}
          </div>
        </div>
        <div className="overflow-x-auto">
          <table data-theme="garden" className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th>Nombre</th>
                {/* <th>NOI/WEB</th> */}
                {/* <th>Puesto</th> */}
                {/* <th>Area</th> */}
                <th className="">Asistencia</th>
                <th>Taxi</th>
                <th>Celular</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {attendees.map((colab, i) => (
                <tr key={i}>
                  <td>{colab.name}</td>
                  <td className="">
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
                  {/* <td>{replaceSpecialCharacter(colab.name)}</td> */}
                  {/* <td>{colab.position === "" ? "S/D" : colab.position}</td> */}
                  {/* <td>{colab.area === "" ? "S/D" : colab.area}</td> */}

                  <td>
                    {colab.taxi ? (
                      <svg
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        height="1em"
                        width="1em"
                        className="w-7 h-7 text-success"
                      >
                        <path d="M10.97 4.97a.75.75 0 011.07 1.05l-3.99 4.99a.75.75 0 01-1.08.02L4.324 8.384a.75.75 0 111.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 01.02-.022z" />
                      </svg>
                    ) : (
                      <svg
                        fill="none"
                        viewBox="0 0 15 15"
                        height="1em"
                        width="1em"
                        className="w-7 h-7 text-error"
                      >
                        <path
                          fill="currentColor"
                          fillRule="evenodd"
                          d="M11.782 4.032a.575.575 0 10-.813-.814L7.5 6.687 4.032 3.218a.575.575 0 00-.814.814L6.687 7.5l-3.469 3.468a.575.575 0 00.814.814L7.5 8.313l3.469 3.469a.575.575 0 00.813-.814L8.313 7.5l3.469-3.468z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </td>
                  <td>{colab.phone}</td>
                  <th>
                    <div
                      onClick={() => toggleList(colab.id)}
                      className="form-control"
                    >
                      <label className="cursor-pointer label">
                        <input
                          type="checkbox"
                          checked={list.includes(colab.id) ? true : false}
                          // checked="checked"
                          className="checkbox checkbox-error"
                        />
                      </label>
                    </div>
                  </th>
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

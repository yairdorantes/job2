import { useEffect, useState } from "react";
import QrScanner from "qr-scanner";
import axios from "axios";
import { api } from "../api";
import toast from "react-hot-toast";
import Modal from "./Modal";

const QRScanner = () => {
  const [code, setCode] = useState({
    nombre: "",
    celular: -1,
    identificador: "",
  });
  useEffect(() => {
    const videoElem = document.createElement("video");
    document.body.appendChild(videoElem);
    const qrScanner = new QrScanner(
      videoElem,
      (result) => {
        // console.log("decoded qr code:", result);
        const employeeData = JSON.parse(result.data);
        console.log(employeeData, "**");
        setCode(employeeData);
      },
      { highlightScanRegion: true }
    );
    qrScanner.start();
    return () => {
      qrScanner.stop();
      document.body.removeChild(videoElem);
    };
  }, []);
  const confirmAttendance = () => {
    try {
      const employee = code["celular"];
      axios
        .put(`${api}/colabs`, { employee })
        .then((res) => {
          console.log("confirm successful");
          toast.success("Asistencia confirmada");
        })
        .catch((err) => {
          console.log(err);
          if (err.response.status === 404) {
            toast.error("Invitado no encontrado, intenta de nuevo");
          } else {
            toast.error("Ups,algo salio mal");
          }
        })
        .finally(() => {
          setCode({});
        });
    } catch (error) {
      toast.error("Ups algo salió mal");
    }
  };
  return (
    <div>
      {/* <Modal /> */}
      <div className="max-w-lg h-[320px] mx-auto pt-24 text-center ">
        <h1 className="text-lg animate-blink font-semibold">
          Código escaneado:
        </h1>
        <div className=" h-28  mt-2 flex flex-col items-center  justify-center">
          {code["celular"] && code["celular"] > 0 ? (
            <div className="flex flex-col gap-3">
              <div>
                Identificador:{" "}
                <span className="font-bold">{code["identificador"]}</span>
              </div>
              <div className="">
                Nombre: <span className="font-bold">{code["nombre"]}</span>
              </div>
              <div>
                Celular: <span className="font-bold">{code["celular"]}</span>
              </div>
            </div>
          ) : (
            <div role="status" className="max-w-sm animate-pulse">
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
              {/* <span className="sr-only">Loading...</span> */}
            </div>
          )}
        </div>
        {code["celular"] && code["celular"] > 0 && (
          <div onClick={confirmAttendance} className="btn mt-5 btn-success ">
            Confirmar Asistencia
          </div>
        )}
      </div>
      <video
        id="video"
        playsInline
        className=""
        style={{ width: "10px", height: "10px" }}
      ></video>
    </div>
  );
};

export default QRScanner;

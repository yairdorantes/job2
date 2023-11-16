// import ecSVG from "../media/eusvg.svg";
// import cottonSVG from "../media/cotton.svg";
import toast from "react-hot-toast";
import axios from "axios";
import { useForm } from "react-hook-form";
import { api, apiWA } from "../api";
import TimeLine from "./TimeLine";
import { useState } from "react";
import QRGenerator from "./QRGenerator";
const base64Image =
  "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";
const Form = () => {
  const [isSent, setIsSent] = useState(false);
  const [employeeData, setEmployeeData] = useState("example 1");
  const {
    register,
    handleSubmit,
    // watch,
    // formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    axios
      .post(`${apiWA}/message/7291434687`, { imageBase64: base64Image })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    setIsSent(true);
    const newColab = {
      employee: data.employee,
      name: data.name,
      lastname: data.lastname,
    };
    setEmployeeData(
      `Numero de empleado: ${data.employee} | Nombre: ${data.name} | Apellido: ${data.lastname}`
    );
    console.log(data);
    axios
      .post(`${api}/colabs`, newColab)
      .then((res) => {
        console.log(res);
        toast.success("Enviado con éxito!");
      })
      .catch((err) => {
        console.log(err);
        toast.error("error");
      });
  };

  return (
    <section className="">
      <TimeLine></TimeLine>
      <div
        id="form-attendance"
        className="w-full transition-all duration-1000 font-chrismas  pb-10 max-w-xs mx-auto"
      >
        {/* <TimeLine/> */}
        <div className="bg-[#CC231E] p-8 relative rounded-lg shadow-md max-w.lg">
          {/* <div id="eusvg" className="absolute top-2 left-2">
            <img src={ecSVG} className="w-12 opacity-60" alt="" />
          </div>
          <div id="eusvg" className="absolute opacity-60 top-1 right-1">
            <img src={cottonSVG} className="w-[80px]" alt="" />
          </div> */}
          <h2 className="text-2xl font-bold mb-4 text-yellow-300 text-center">
            Fiesta de Fin de Año
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} action="#" method="post">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-lg font-bold text-white"
              >
                Número de Empleado:
              </label>
              <input
                {...register("employee", { required: true })}
                type="number"
                className="mt-1 p-2 w-full border text-black font-bold bg-gray-200 rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-lg font-bold text-white"
              >
                Nombre:
              </label>
              <input
                {...register("name", { required: true })}
                type="text"
                className="mt-1 p-2 w-full border text-black font-bold bg-gray-200 rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-lg font-bold text-white"
              >
                Apellido:
              </label>
              <input
                {...register("lastname", { required: true })}
                type="text"
                className="mt-1 p-2 w-full border text-black font-bold bg-gray-200 rounded-md"
                required
              />
            </div>

            <div className="flex items-center justify-center">
              {!isSent ? (
                <button type="submit" className="btn-chrismas mb-5">
                  Enviar
                </button>
              ) : (
                <QRGenerator data={employeeData} imageName="Invitación" />
              )}
            </div>
            <div className="link text-gray-100 absolute left-3">
              ¿Cómo puedo conocer mi número de empleado?
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Form;

// import ecSVG from "../media/eusvg.svg";
// import cottonSVG from "../media/cotton.svg";
import toast from "react-hot-toast";
import axios from "axios";
import { useForm } from "react-hook-form";
import { api } from "../api";
import TimeLine from "./TimeLine";
import { useState } from "react";
import QRGenerator from "./QRGenerator";

const Form = () => {
  const [isSent, setIsSent] = useState(false)
  const [employeeData, setEmployeeData] = useState("example 1")
  const {
    register,
    handleSubmit,
    // watch,
    // formState: { errors },
  } = useForm();
  const onSubmit = (data) => {

setIsSent(true)
    const newColab = {
      employee: data.employee,
      name: data.name,
      lastname: data.lastname,
    };
    setEmployeeData(`Numero de empleado: ${data.employee} | Nombre: ${data.name} | Apellido: ${data.lastname}`)
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
            {!isSent?  <button type="submit" className="btn-chrismas mb-5">
                Enviar
              </button> : <QRGenerator data={employeeData} imageName="Invitación" />  }
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

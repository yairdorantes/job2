// import ecSVG from "../media/eusvg.svg";
// import cottonSVG from "../media/cotton.svg";
import toast from "react-hot-toast";
import axios from "axios";
import { useForm } from "react-hook-form";
import { api } from "../api";
import TimeLine from "./TimeLine";
import { useState } from "react";
import { createQR } from "./CreateQR";

const Form = () => {
  const [isSent, setIsSent] = useState(false);
  // const [employeeData, setEmployeeData] = useState("example 1 jhagjasgjhsg sa gsajsg ja gsaj shgasjgsajas sjg");
  const {
    register,
    handleSubmit,
    // watch,
    // formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const base64QR = await createQR(
      `Numero de empleado: ${data.employee} | Nombre: ${data.name} |`
    );
    setIsSent(true);
    const newColab = {
      employee: data.employee,
      name: data.name,
      phone: data.phone,
      email: data.email,
      ticket: base64QR,
    };
    // setEmployeeData(
    //   `Numero de empleado: ${data.employee} | Nombre: ${data.name} | Apellido: ${data.lastname}`
    // );
    // console.log(data);
    axios
      .post(`${api}/colabs`, newColab)
      .then((res) => {
        toast.success("Initación enviada con éxito!");
      })
      .catch((err) => {
        console.log(err.response.status);
        if (err.response.status === 403) {
          toast.error(
            "Tu invitación ya ha sido enviada. Por favor, revisa tu bandeja de WhatsApp."
          );
        } else {
          toast.error("Ocurrio un error, intenta nuevamente");
        }
      });
  };
  return (
    <section
      id="form-attendance"
      className="flex flex-wrap pt-24  justify-center gap-14 sm:gap-40 "
    >
      <TimeLine />
      <div className="w-full transition-all duration-1000 font-monsterrat  pb-10 max-w-xs ">
        {/* <TimeLine/> */}
        <div className="bg-[#CC231E] p-8 relative rounded-lg shadow-md max-w.lg">
          {/* <div id="eusvg" className="absolute top-2 left-2">
            <img src={ecSVG} className="w-12 opacity-60" alt="" />
          </div>
          <div id="eusvg" className="absolute opacity-60 top-1 right-1">
            <img src={cottonSVG} className="w-[80px]" alt="" />
          </div> */}
          <h2 className="text-2xl font-bold mb-4 text-white text-center">
            Confirma tu asistencia
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} action="#" method="post">
            <div className="mb-4">
              <label htmlFor="name" className="block text-lg  text-white">
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
              <label htmlFor="name" className="block text-lg  text-white">
                Nombre completo:
              </label>
              <input
                {...register("name", { required: true })}
                type="text"
                className="mt-1 p-2 w-full border text-black font-bold bg-gray-200 rounded-md"
                required
              />
            </div>
            {/* <div className="mb-4">
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
            </div> */}
            <div className="mb-4">
              <label htmlFor="name" className="block text-lg  text-white">
                Correo empresarial:
              </label>
              <input
                {...register("email", { required: true })}
                type="email"
                className="mt-1 p-2 w-full border text-black font-bold bg-gray-200 rounded-md"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="name" className="block text-lg  text-white">
                Numero de celular (WhatsApp):
              </label>
              <input
                {...register("phone", { required: true })}
                type="number"
                className="mt-1 p-2 w-full border text-black font-bold bg-gray-200 rounded-md"
                required
              />
            </div>

            <div className="flex items-center justify-center">
              <button
                type="submit"
                disabled={isSent}
                className="btn-chrismas "
                // mb-5
              >
                {isSent ? "Invitacion enviada" : "Enviar"}
              </button>

              {/* <QRGenerator data={employeeData} imageName="InvitaciónToday" /> */}
            </div>
            {/* <div className="link text-gray-100 absolute left-3">
              ¿Cómo puedo conocer mi número de empleado?
            </div> */}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Form;

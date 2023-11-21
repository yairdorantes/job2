import toast from "react-hot-toast";
import axios from "axios";
import { useForm } from "react-hook-form";
import { api } from "../api";
import TimeLine from "./TimeLine";
import { useState } from "react";
import { createQR } from "./CreateQR";
import useStore from "../Context";

const Form = () => {
  const [isSent, setIsSent] = useState(false);
  const { location } = useStore();
  const [isLoading, setIsLoading] = useState(false);

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
    const newColab = {
      employee: data.employee,
      name: data.name,
      phone: data.phone,
      email: data.email,
      ticket: base64QR,
      location: location,
    };
    console.log(newColab);
    // setEmployeeData(
    //   `Numero de empleado: ${data.employee} | Nombre: ${data.name} | Apellido: ${data.lastname}`
    // );
    // console.log(data);
    setIsLoading(true);
    axios
      .post(`${api}/colabs`, newColab)
      .then((res) => {
        setIsSent(true);

        toast.success("Initación enviada con éxito!", { duration: 3000 });
      })
      .catch((err) => {
        console.log(err.response.status);
        if (err.response.status === 403) {
          toast.error(
            "Tu invitación ya ha sido enviada. Por favor, revisa tu bandeja de WhatsApp.",
            { duration: 3000 }
          );
        } else {
          toast.error("Ocurrio un error, intenta nuevamente", {
            duration: 3000,
          });
        }
      })
      .finally(() => setIsLoading(false));
  };
  return (
    <section
      id="form-attendance"
      className="flex flex-wrap pt-24  justify-center gap-14 sm:gap-40 "
    >
      {/* Open the modal using document.getElementById('ID').showModal() method */}

      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Data!</h3>
          <p className="py-4">Data</p>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
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
            <div className="mb-2">
              <label htmlFor="name" className="block text-lg  text-white">
                NOI o :
              </label>
              <input
                {...register("employee", { required: true })}
                type="number"
                className="mt-1 p-2 w-full border text-black font-bold bg-gray-200 rounded-md"
                required
              />
            </div>
            <div
              onClick={() => document.getElementById("my_modal_2").showModal()}
              className="link link-white text-sm"
            >
              ¿Como puedo conocer mi numero de empleado?
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
            <div className="mb-4">
              <label htmlFor="name" className="block text-lg  text-white">
                Correo empresarial:
              </label>
              <input
                {...register("email", { required: false })}
                type="email"
                className="mt-1 p-2 w-full border text-black font-bold bg-gray-200 rounded-md"
                placeholder="*opcional*"
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
                className="btn-chrismas mb-4"
                // mb-5
              >
                {isSent && !isLoading ? (
                  "Invitación enviada"
                ) : (
                  <>
                    {isLoading && (
                      <span className="loading loading-spinner text-info"></span>
                    )}
                    {!isLoading && "Enviar"}
                  </>
                )}
              </button>
              {/* <QRGenerator data={employeeData} imageName="InvitaciónToday" /> */}
            </div>
            {/* <div className="link text-gray-100  ">
              ¿Cómo puedo conocer mi número de empleado?
            </div> */}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Form;

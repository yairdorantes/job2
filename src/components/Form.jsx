import ecSVG from "../media/eusvg.svg";
import cottonSVG from "../media/cotton.svg";
import toast from "react-hot-toast";
import axios from "axios";
import { useForm } from "react-hook-form";
import { api } from "../api";
import TimeLine from "./TimeLine";

const Form = () => {
  const {
    register,
    handleSubmit,
    // watch,
    // formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const newColab = {
      employee: data.employee,
      name: data.name,
      lastname: data.lastname,
    };
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
    <section className="pt-24">
      <TimeLine></TimeLine>
      <div
        id="form-attendance"
        className="w-full font-chrismas   max-w-xs mx-auto"
      >
        {/* <TimeLine/> */}
        <div className="bg-gray-100 p-8 relative rounded-lg shadow-md max-w.lg">
          {/* <div id="eusvg" className="absolute top-2 left-2">
            <img src={ecSVG} className="w-12 opacity-60" alt="" />
          </div>
          <div id="eusvg" className="absolute opacity-60 top-1 right-1">
            <img src={cottonSVG} className="w-[80px]" alt="" />
          </div> */}
          <h2 className="text-2xl font-bold mb-4 text-red-500 text-center">
            Fiesta de Fin de Año
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} action="#" method="post">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-lg font-bold text-green-700"
              >
                Número de esclavo:
              </label>
              <input
                {...register("employee", { required: true })}
                type="number"
                className="mt-1 p-2 w-full border text-yellow-500 bg-slate-800 rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-lg font-bold text-green-700"
              >
                Nombre:
              </label>
              <input
                {...register("name", { required: true })}
                type="text"
                className="mt-1 p-2 w-full border text-yellow-500 bg-slate-800 rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-lg font-bold text-green-700"
              >
                Apellido:
              </label>
              <input
                {...register("lastname", { required: true })}
                type="text"
                className="mt-1 p-2 w-full border text-yellow-500 bg-slate-800 rounded-md"
                required
              />
            </div>

            <div className="flex items-center justify-center">
              <button type="submit" className="btn-chrismas mb-5">
                Enviar
              </button>
            </div>
            <div className="link text-black absolute left-3">
              ¿Cómo puedo conocer mi número de empleado?
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Form;

import axios from "axios";
import { useForm } from "react-hook-form";
import { createQR } from "./CreateQR";
import { api } from "../api";
import toast from "react-hot-toast";
import useStore from "../Context";

const ModalAdd = ({ getData }) => {
  const { location } = useStore();
  const {
    register,
    handleSubmit,
    // watch,
    // formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    // console.log(data);
    const base64QR = await createQR(
      `{"nombre": "${data.name}","celular":${data.phone}} `
    );
    const newEmployee = {
      name: data.name,
      phone: data.phone,
      taxi: data.taxi === "yes" ? true : false,
      wasa: data.wasa === "yes" ? true : false,
      qr: base64QR,
      location,
      asistencia: parseInt(data.asistencia),
    };
    // console.log(newEmployee);
    document.getElementById("my_modal_1").close();

    axios
      .post(`${api}/panel`, newEmployee)
      .then((res) => {
        toast.success("Agregado exitosamente");
      })
      .catch((err) => {
        console.log(err.response.status);
        // if(err)
        if (err.response.status === 403) {
          toast.error(
            "El numero que tratas de ingresar ya existe en la base de datos ",
            { duration: 3500 }
          );
        } else {
          toast.error("Ops algo salio mal");
        }
      })
      .finally(() => {
        getData(location);
      });
  };
  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Agregar Invitado</h3>
          <div className="py-4">
            <div className="form-control mx-auto w-full max-w-xs">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                  <label className="label">
                    <span className="label-text">Nombre:</span>
                  </label>
                  <input
                    type="text"
                    {...register("name", { required: true })}
                    //   placeholder="Type here"
                    className="input input-bordered w-full max-w-xs"
                  />
                </div>{" "}
                <div className="mb-1">
                  <select
                    className="select select-bordered w-full max-w-xs"
                    // defaultValue={1}
                    {...register("asistencia", { required: true })}
                  >
                    <option value={0} disabled selected>
                      Asistencia
                    </option>

                    <option value={1}>Confirmado</option>
                    <option value={2}>Asistió</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label className="label">
                    <span className="label-text">Celular:</span>
                  </label>
                  <input
                    type="number"
                    {...register("phone", { required: true })}
                    //   placeholder="Type here"
                    className="input input-bordered w-full max-w-xs"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="name" className="block">
                    ¿Taxi?
                  </label>
                  <div className="flex justify-evenly  text-white font-bold">
                    <div className="flex items-center gap-1">
                      <label htmlFor="option1">NO</label>
                      <input
                        type="radio"
                        // data-theme="light"
                        id="option1"
                        name="radio-7"
                        value="no"
                        defaultChecked={true}
                        className="radio radio-primary"
                        {...register("taxi")}
                        // checked
                      />
                    </div>
                    <div className="flex items-center gap-1">
                      <label htmlFor="option2">SI</label>
                      <input
                        type="radio"
                        id="option2"
                        defaultChecked={false}
                        value="yes"
                        name="radio-7"
                        className="radio radio-primary"
                        {...register("taxi")}
                      />
                    </div>
                  </div>
                </div>
                <div className="mb-4">
                  <label htmlFor="name" className="block mb-2">
                    ¿Enviar boleto por WhatsApp?
                  </label>
                  <div className="flex justify-evenly  text-white font-bold">
                    <div className="flex items-center gap-1">
                      <label htmlFor="option1">NO</label>
                      <input
                        type="radio"
                        // data-theme="light"
                        id="option1"
                        name="radio-7"
                        value="no"
                        defaultChecked={true}
                        className="radio radio-primary"
                        {...register("wasa")}
                        // checked
                      />
                    </div>
                    <div className="flex items-center gap-1">
                      <label htmlFor="option2">SI</label>
                      <input
                        type="radio"
                        id="option2"
                        defaultChecked={false}
                        value="yes"
                        name="radio-7"
                        className="radio radio-primary"
                        {...register("wasa")}
                      />
                    </div>
                  </div>
                </div>
                <div className="text-center mt-7">
                  <button type="submit" className="btn w-3/4 btn-success ">
                    Enviar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default ModalAdd;

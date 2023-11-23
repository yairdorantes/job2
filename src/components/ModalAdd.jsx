import { useForm } from "react-hook-form";

const ModalAdd = () => {
  const {
    register,
    handleSubmit,
    // watch,
    // formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
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
                <label className="label">
                  <span className="label-text">Nombre:</span>
                </label>
                <input
                  type="text"
                  {...register("name")}
                  //   placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                />
                <div className="text-center mt-5">
                  <button type="submit" className="btn btn-success ">
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

import { useEffect, useState } from "react";
import { accessKey } from "../api";

const Modal = () => {
  //   const [password, setPassword] = useState("");
  const [verified, setVerified] = useState(false);
  useEffect(() => {
    document.getElementById("my_modal_2").showModal();
  }, []);

  const validatePassword = (value) => {
    if (value === accessKey) {
      document.getElementById("my_modal_2").close();
      setVerified(true);
    }
  };
  return (
    <div
      className={`${!verified && "bg-gray-800 w-full z-10 absolute h-screen"}`}
    >
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box text-center ">
          <h3 className="font-bold mb-2 text-lg">Ingresa clave de acceso</h3>
          {/* <form onSubmit={validatePassword}> */}
          <input
            type="password"
            // value={password}
            onChange={(e) => validatePassword(e.target.value)}
            placeholder=""
            className="input input-bordered w-full max-w-xs"
          />
          {/* <div className="text-center">
            <button
              onClick={validatePassword}
              type="submit"
              className="btn w-1/3 btn-success mt-2"
            >
              Entrar
            </button>
          </div> */}
          {/* </form> */}
        </div>
      </dialog>
    </div>
  );
};

export default Modal;

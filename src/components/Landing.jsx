import cottonLogo from "../media/cotton.svg";

const Landing = () => {
  return (
    <section className="">
      <div className="fixed top-0 z-10  backdrop-blur-sm bg-white-30 h-16 inset-x-0 mx-auto w-screen ">
        <img src={cottonLogo} alt="" className="w-[150px] mx-auto " />
      </div>
      <div className="h-screen flex flex-col items-center justify-center">
        <div className="font-bold text-center font-chrismas pt-20  text-yellow-300 capitalize">
          <div className="text-[70px]">fiesta de</div>
          <div className="text-[80px]">fin de año</div>
        </div>
        <div className="mt-10 text-center">
          <a href="#form-attendance">
            <button className="btn-chrismas1">Confirmar Asistencia</button>
          </a>
        </div>
      </div>
      {/* <a href="#form-attendance">form</a> */}
    </section>
  );
};

export default Landing;

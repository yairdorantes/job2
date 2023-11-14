
import cottonLogo from "../media/cotton.svg"
const Landing = () => {
  return (
    <section className="">
        <div className="fixed top-0 z-10 bg-white h-20  w-screen flex justify-center">
            <img src={cottonLogo} alt=""  className="w-[180px] "/>
        </div>
        <div className="font-bold text-center pt-20  text-yellow-400 capitalize">
        <div className="text-[45px]">
        fiesta de
        </div>
        <div className="text-[50px]">
         fin de año
        </div>
        </div>
        <div className="mt-10 text-center">
            <a href="#form-attendance">

            <button className="btn-chrismas1">Confirmar Asistencia</button>
            </a>
        </div>
       
    <a href="#form-attendance">form</a>
    </section>
  )
}

export default Landing
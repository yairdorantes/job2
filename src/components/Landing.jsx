import bg from "../media/bluebg.svg";
import lerma from "../media/AmericanLogo-Lerma.svg";
import ss from "../media/SS.svg";
import division from "../media/fx.svg";
import cadereyta from "../media/cadereyta.svg";
import title from "../media/title.png";
import { useEffect, useState } from "react";
import useStore from "../Context";
import { locations } from "../api";

const Landing = () => {
  const { location, changeLocation } = useStore();

  const scrollToBottom = () => {
    const content = document.getElementById("form-attendance");
    content.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };
  const [imagePath, setImagePath] = useState(lerma);
  useEffect(() => {
    let path = window.location.href;
    console.log(path);
    if (path.includes(locations.lerma)) {
      setImagePath(lerma);
      changeLocation(1);
    } else if (
      path.includes(locations.santiago) | path.includes(locations.cruz)
    ) {
      setImagePath(ss);
      changeLocation(2);
    } else if (path.includes(locations.cadereyta)) {
      setImagePath(cadereyta);
      changeLocation(3);
    } else if (
      path.includes(locations.division) | path.includes(locations.fx)
    ) {
      setImagePath(division);
      changeLocation(4);
    }
  }, []);

  return (
    <section className="relative">
      <div className="fixed  top-0 z-10 p-2 backdrop-blur-sm bg-white-30 h-24 inset-x-0 mx-auto w-screen ">
        <a href="#">
          <img
            src={imagePath}
            alt=""
            className="cursor-pointer bg-white rounded-lg w-[185px] sm:w-[145px]  mx-auto "
          />
        </a>
      </div>
      <div
        style={{
          width: "100vw",
          backgroundImage: `url(${bg})`,
        }}
        className="min-h-screen w-screen bg-fixed relative bg-cover bg-center flex flex-col items-center justify-center"
      >
        <div className=" mt-24">
          <img src={title} className="w-[450px]" alt="" />
        </div>
        <div className="mt-10 text-center">
          <button
            onClick={scrollToBottom}
            className="font-cinzel btn-chrismas1"
          >
            Confirmar Asistencia
          </button>
        </div>
        <div className=""></div>
      </div>
      <div className="custom-shape-divider-bottom-1700083642">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Landing;

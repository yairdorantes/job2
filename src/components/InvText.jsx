import { useState } from "react";
import people from "../media/meet2.svg";
import useStore from "../Context";
import { useEffect } from "react";

const InvText = () => {
  const { location } = useStore();
  const [bodyText, setBodyText] = useState({
    company: "American Cotton",
    end: "Departamento de Recursos Humanos.",
    location:
      "22 de diciembre de 2023 a las 15:00 hrs. en el salón “Jardín Buenavista”, ubicado en Buenavista, San Mateo Atenco.",
    confirmation: "Confirma tu asistencia antes del 11 de diciembre de 2023.",
  });

  useEffect(() => {
    if (location === 4) {
      setBodyText({
        company: "División FX",
        end: "Departamento de Recursos Humanos.",
        location:
          "16 de diciembre de 2023 a las 15:00 hrs. en el salón “Jardín”, ubicado en Av. Independencia Bo. De Guadalupe N° 1212, San Mateo Atenco",
        confirmation:
          "Confirma tu asistencia antes del 11 de diciembre de 2023.",
      });
    } else if (location === 1) {
      setBodyText({
        company: "American Cotton",
        end: "Departamento de Recursos Humanos.",
        location:
          "22 de diciembre de 2023 a las 15:00 hrs. en el salón “Jardín Buenavista”, ubicado en Buenavista, San Mateo Atenco.",
        confirmation:
          "Confirma tu asistencia antes del 21 de diciembre de 2023.",
      });
    } else if (location === 2) {
      setBodyText({
        company: "American Cotton",
        end: "Ing. Rosalía Albarrán Rodríguez",
        location:
          "12 de diciembre de 2023 a las 14:00 hrs. en el salón “Vicky´s”, ubicado en Ron de Hank, Prolongación, Don Catarino González Benítez, Colonia Guadalupe, 52600 Santiago Tianguistenco, Méx.",
        confirmation:
          "Confirma tu asistencia antes del 8 de diciembre de 2023.",
      });
    } else if (location === 3) {
      setBodyText({
        company: "División FX",
        end: "Departamento de Recursos Humanos.",
        location:
          "18 de diciembre de 2023 a las 11:30 hrs.en las instalaciones de la Planta Cadereyta.",
        confirmation: "",
      });
    }
  }, [location]);
  return (
    <section className="mt-20">
      <div className="flex gap-10 flex-col justify-center items-center">
        <div id="hi" className=" font-monsterrat flex-col ">
          <div className="text-red-600 text-center text-[24px] sm:text-[30px]  font-bold">
            Estimados colaboradores y colaboradoras:
          </div>
          <p className="text-black w-lg sm:w-1/2 text-[18px] mx-auto text-center  mt-5">
            Gracias por compartir este año de éxitos y desafíos apasionantes.
            <p className="mt-2">
              {bodyText.company} admira y valora tu trabajo, es por eso que te
              hacemos la cordial invitación para asistir a nuestra celebración
              de fin de año, en agradecimiento a su entera colaboración,
              dedicación y esfuerzo, el{" "}
              <span className="font-semibold">{bodyText.location}</span>
            </p>{" "}
            <p>{bodyText.confirmation}</p>
            <p>
              ¡Feliz año nuevo para ti y tus seres queridos!{" "}
              {location === 2 && (
                <span>
                  Eres una pieza invaluable para el equipo American Cotton.
                </span>
              )}
            </p>
            <p className="mt-6">
              <span className="font-bold">Cordialmente:</span>
              {location === 2 && <p>Directora de Planta</p>}
              <p>{bodyText.end}</p>
            </p>
          </p>
        </div>
        <div className="mt-12">
          <img
            src={people}
            className="w-96 mask mask-heart rounded-md"
            alt=""
          />
        </div>
      </div>
      <div className="max-w-lg mx-auto text-black"></div>
    </section>
  );
};

export default InvText;

const InvText = () => {
  return (
    <section className="mt-20">
      <div
        id="hi"
        className="flex justify-center items-center font-cinzel flex-col text-[20px]"
      >
        <div className="text-black font-bold">Estimados colaboradores:</div>
        <p className="text-black max-w-lg text-center mt-5">
          En agradecimiento a su entera colaboración y esfuerzo se les hace una
          cordial invitación para asistir a nuestra fiesta de fin de año El día
          <span className="font-bold">
            {" "}
            12 de diciembre a las 2:00 pm en el Salón Vickys
          </span>
          , ubicado en{" "}
          <span className="">
            Ron de Hank, Prolongación, Don Catarino González Benítez, Colonia
            Guadalupe, 52600 Santiago Tianguistenco, Méx.
          </span>
        </p>
      </div>

      <div className="max-w-lg mx-auto text-black"></div>
    </section>
  );
};

export default InvText;

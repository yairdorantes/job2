const Sec3 = () => {
  return (
    <section className="mt-24   mx-auto">
      <div className="text-center  mb-10 text-red-600 font-Paragraph font-bold text-2xl">
        <div className=" font-monsterrat">Ubicación</div>
        {/* <hr className="h-10  text-black w-10 "/> */}
        <div className="border-t border-1 border-red-500 my-1 w-20 mx-auto"></div>
      </div>
      <div className="sm:w-1/2 w-lg mx-auto">
        <iframe
          className="w-full h-[400px] rounded-sm"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.390675226299!2d-99.47607004366625!3d19.178131471275425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cdf396dfc66c9f%3A0xecd70be607df12c0!2sSal%C3%B3n%20Vicky&#39;s!5e0!3m2!1ses-419!2smx!4v1700017829348!5m2!1ses-419!2smx"
          // width="100%"
          // height="350"
          // style="border:0;"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default Sec3;

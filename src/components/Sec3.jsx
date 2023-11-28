import { useEffect, useState } from "react";
import useStore from "../Context";

const Sec3 = () => {
  const { location } = useStore();
  const [locationMaps, setLocationMaps] = useState("");
  console.log(location);
  // useEffect(() => {
  //   if (location === 4 || location === 1) {
  //     setLocationMaps(
  //       "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3766.1894654567823!2d-99.5386424!3d19.274125200000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cdf5299fb9169d%3A0xdb9ebb6dcb2ebe19!2sJard%C3%ADn%20de%20Fiestas%20Buenavista!5e0!3m2!1ses-419!2smx!4v1701104039602!5m2!1ses-419!2smx"
  //     );
  //   } else {
  //     setLocationMaps("");
  //   }
  // }, [location]);
  return (
    <section className="mt-24  mx-auto">
      <div className="text-center  mb-8 text-red-600 font-Paragraph font-bold text-2xl">
        <div className=" font-monsterrat">Ubicación</div>
        {/* <hr className="h-10  text-black w-10 "/> */}
        <div className="border-t border-1 border-red-500 my-1 w-20 mx-auto"></div>
      </div>
      <div id="sec3" className="sm:w-1/2 w-lg mx-auto">
        {location === 2 && (
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
        )}
        {location === 1 && (
          <iframe
            className="w-full h-[400px] rounded-sm"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3766.1894654567823!2d-99.5386424!3d19.274125200000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cdf5299fb9169d%3A0xdb9ebb6dcb2ebe19!2sJard%C3%ADn%20de%20Fiestas%20Buenavista!5e0!3m2!1ses-419!2smx!4v1701187859507!5m2!1ses-419!2smx"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        )}
        {location === 4 && (
          <iframe
            className="w-full h-[400px] rounded-sm"
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3766.7620040334996!2d-99.53564962479028!3d19.249201381991366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDE0JzU3LjEiTiA5OcKwMzEnNTkuMSJX!5e0!3m2!1ses!2smx!4v1701187020958!5m2!1ses!2smx"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        )}
      </div>
    </section>
  );
};

export default Sec3;

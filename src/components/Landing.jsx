import cottonLogo from "../media/cotton.svg";
import bg from "../media/bglex.jpg";
import lerma from "../media/AmericanLogo-Lerma.svg";
import santiago from "../media/AmericanLogo-Santiago.svg";
import santacruz from "../media/AmericanLogo-SantaCruz.svg";
import title from "../media/title.png";
import { useEffect, useState } from "react";
import QRScanner from "./QRScanner";
import { Link } from "react-router-dom";
const Landing = () => {
  const onNewScanResult = (decodedText, decodedResult) => {
    // handle decoded results here
    alert(decodedResult, decodedText);
  };
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  const [imagePath, setImagePath] = useState(lerma);
  useEffect(() => {
    let path = window.location.href;
    console.log(path);
    if (path.includes("lerma")) {
      setImagePath(lerma);
    } else if (path.includes("santiago")) {
      setImagePath(santiago);
    } else if (path.includes("cruz")) {
      setImagePath(santacruz);
    }
    // path.includes("local") && console.log("yes");
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
          // width: "100vw",
          backgroundImage: `url(${bg})`,
        }}
        className="min-h-screen w-screen bg-fixed relative bg-cover bg-center flex flex-col items-center justify-center"
      >
        <div className=" mt-24">
          <img src={title} className="w-[450px]" alt="" />
        </div>
        <div className="mt-10 text-center">
          <a href="">
            <Link to={"/#form-attendance"}>
              <button
                onClick={scrollToBottom}
                className="font-cinzel btn-chrismas1"
              >
                Confirmar Asistencia
              </button>
            </Link>
          </a>
        </div>
        <div className="">
          {/* <QRScanner
            fps={10}
            qrbox={250}
            disableFlip={false}
            qrCodeSuccessCallback={onNewScanResult}
          /> */}
        </div>
      </div>
      <div class="custom-shape-divider-bottom-1700083642">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
      {/* <a href="#form-attendance">form</a> */}
    </section>
  );
};

export default Landing;

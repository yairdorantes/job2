import { useEffect, useState } from "react";
import QrScanner from "qr-scanner";

const QRScanner = () => {
  const [code, setCode] = useState("");
  useEffect(() => {
    const videoElem = document.createElement("video");
    document.body.appendChild(videoElem);

    const qrScanner = new QrScanner(
      videoElem,

      (result) => {
        // alert(JSON.stringify(result));
        console.log("decoded qr code:", result);
        const employeeData = result.data.split("|");
        console.log(employeeData);
        setCode(employeeData);
      },
      { highlightScanRegion: true }
    );
    qrScanner.start();
    return () => {
      qrScanner.stop();
      document.body.removeChild(videoElem);
    };
  }, []);

  return (
    <div>
      <h1>Código escaneado:</h1>
      <div className="font-bold h-36 m-10">
        <div className="">{code[0]}</div>
        <div>{code[1]}</div>
        <div>{code[2]}</div>
      </div>
      <video
        id="video"
        playsInline
        className=""
        style={{ width: "10px", height: "10px" }}
      ></video>
    </div>
  );
};

export default QRScanner;

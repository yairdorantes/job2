import QRCode from "qrcode";
import { useEffect, useRef } from "react";

const QRGenerator = ({ data, imageName = "Invitacion" }) => {
  const handleDownload = async () => {
    try {
      const canvas = await QRCode.toCanvas(data, { width: 200 });
      const imageUrl = canvas.toDataURL("image/png");
      console.log(imageUrl, "***********");
      // const link = document.createElement('a');
      // link.href = imageUrl;
      // link.download = imageName || 'downloaded-qrcode';
      // document.body.appendChild(link);
      // link.click();
      // document.body.removeChild(link);
    } catch (error) {
      console.error("Error generating or downloading QR code:", error);
    }
  };

  return (
    <div onClick={handleDownload} style={{ cursor: "pointer" }}>
      Click here to download QR code
    </div>
  );

  //   const handleDownload = () => {
  //     const canvas = qrCodeContainerRef.current.querySelector('canvas');
  //     if (!canvas) {
  //       console.error('No QR code canvas found');
  //       return;
  //     }
  //     const imageUrl = canvas.toDataURL('image/png');
  //     const link = document.createElement('a');
  //     link.href = imageUrl;
  //     link.download = imageName || 'downloaded-qrcode';
  //     document.body.appendChild(link);
  //     link.click();
  //     document.body.removeChild(link);
  //   };

  //   const qrCodeContainerRef = useRef(null);
  //   useEffect(() => {
  //     const generateQRCode = async () => {
  //       try {
  //         const canvas = await QRCode.toCanvas(data, { width: 200 });
  //         qrCodeContainerRef.current.innerHTML = ''; // Clear previous content
  //         qrCodeContainerRef.current.appendChild(canvas);
  //       } catch (error) {
  //         console.error('Error generating QR code:', error);
  //       }
  //     };

  //     generateQRCode();
  //   }, [data]);

  //   return (
  //     <div className="text-white">
  // Click Sobre el QR para descargar
  //     <div ref={qrCodeContainerRef} onClick={handleDownload} style={{ cursor: 'pointer' }}>
  //       {/* QR code will be displayed here */}
  //       {/* <div className="text-black">jajajaajaj</div> */}
  //     </div>
  //     </div>
  //   );
};

export default QRGenerator;

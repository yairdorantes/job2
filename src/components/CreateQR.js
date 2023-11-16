import QRCode from "qrcode";

export const createQR = async (data) => {
  try {
    const canvas = await QRCode.toCanvas(data, { width: 200 });
    let imageUrl = canvas.toDataURL("image/png");
    imageUrl = imageUrl.split(";base64,")[1];
    //   console.log(imageUrl,"createqr file");
    return imageUrl;
  } catch (error) {
    console.error("Error generating or downloading QR code:", error);
    return null;
  }
};

import qrcode from "qrcode-terminal";
import pkg from "whatsapp-web.js";
import express from "express";
import cors from "cors";
const { Client, MessageMedia } = pkg;
const client = new Client();
const app = express();
app.use(cors());

const port = 3000;

app.use(express.json());
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

app.post("/message/:number", (req, res) => {
  const { number } = req.params;
  const imageBase64 = req.body.imageBase64;
  const media = new MessageMedia("image/png", imageBase64);
  messageToEmployee(number, media);
  res.json("ok");
});
app.get("/", (req, res) => {
  res.json("ok");
});
app.post("/", (req, res) => {
  const imageBase64 = req.body.imageBase64;
  console.log(imageBase64);
  res.json("ok");
});

/*/ //////////////////////////////////*/

client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});

client.on("ready", () => {
  console.log("Client is ready!");
  try {
    console.log("here");
    client
      .sendMessage("5219@c.us", "xdxd")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (error) {
    console.log(err);
  }
});
client.on("message", (message) => {
  const media = new MessageMedia("image/png", base64);
  message.reply(media);
});
export const messageToEmployee = (phone, message) => {
  const handlePhone = `521${phone}@c.us`;
  client.sendMessage(handlePhone, message);
};
client.initialize();

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
  console.log(`Server is running at port: ${port}`);
});

app.post("/message/:number", async (req, res) => {
  const { number } = req.params;
  const imageBase64 = req.body.imageBase64;
  const media = new MessageMedia("image/png", imageBase64);
  try {
    messageToEmployee(number, media);
    res.json("ok");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error sending message to employee" });
  }
});
app.get("/", (req, res) => {
  res.json("ok");
});

/*/ //////////////////////////////////*/

client.on("qr", (qr) => qrcode.generate(qr, { small: true }));

client.on("ready", () => console.log("Client is ready!"));

const messageToEmployee = (phone, message) => {
  const handlePhone = `521${phone}@c.us`;
  client
    .sendMessage(handlePhone, message)
    .then((res) => {
      console.log(`Message sent to:${phone}`);
    })
    .catch((err) => {
      console.log(err);
    });
};
client.initialize();

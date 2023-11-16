import express from "express";
import { messageToEmployee } from ".";
const app = express();
const port = 3000;

app.use(express.json());
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

app.post("/message/:number", (req, res) => {
  const { number } = req.params.number;
  messageToEmployee(number, "test api");
  res.json("ok");
});
app.get("/", (req, res) => {
  console.log("yayayay");
  res.json("ok");
});

import axios from "axios";
import { api } from "./api";
import Snowfall from "react-snowfall";
import bg from "./media/bg.jpeg";
import Swal from "sweetalert2";
import Form from "./components/Form";
import Landing from "./components/Landing";
import InvText from "./components/InvText";
import Sec3 from "./components/Sec3";
import { motion, useScroll, useSpring } from "framer-motion";
import cotton from "./media/ejemplo.png";
import cotton2 from "./media/lol.jpg";
function App() {
  const images = [cotton, cotton2];
  const { scrollYProgress } = useScroll();
  const getColaborators = () => {
    axios
      .get(`${api}/colabs`)
      .then((res) => {
        console.log(res);
        const colabs = res.data.colabs;
        console.log(colabs);
        Swal.fire({
          html: `
          <ul className="list-disc pl-4">
          ${colabs
            .map((colab, i) => `<li className="mb-2">${colabs[i].name}</li>`)
            .join("")}
        </ul>
          `,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div
      className="min-h-screen relative bg-cover bg-center"
      style={{
        // width: "100vw",
        backgroundImage: `url(${bg})`,
      }}
    >
    <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />

        <Landing />
      <div className="mx-4">
        <InvText />
        <Sec3 />
        <Form />
        <Snowfall
          // images={images}
          color="#dadee7fd"
          speed={[0.5, 0.5]}
          radius={[2, 4]}
          snowflakeCount={100}
          style={{
            position: "fixed",
            width: "100vw",
            height: "100vh",
          }}
        />
      </div>
    </div>
  );
}

export default App;

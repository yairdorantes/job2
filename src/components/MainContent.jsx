import axios from "axios";
import { api } from "../api";
import Snowfall from "react-snowfall";
import bg from "../media/bg.jpeg";
import Swal from "sweetalert2";
import Form from "./Form";
import Landing from "./Landing";
import InvText from "./InvText";
import Sec3 from "./Sec3";
import { motion, useScroll, useSpring } from "framer-motion";
import cotton from "../media/ejemplo.png";
import cotton2 from "../media/lol.jpg";

const MainContent = () => {
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
          color="#f6f8fbfc"
          speed={[0.5, 0.5]}
          radius={[2, 4]}
          snowflakeCount={95}
          style={{
            position: "fixed",
            width: "100vw",
            height: "100vh",
          }}
        />
      </div>
    </div>
  );
};

export default MainContent;

import Snowfall from "react-snowfall";
import bg from "../media/bg.jpeg";
import Form from "./Form";
import Landing from "./Landing";
import InvText from "./InvText";
import Sec3 from "./Sec3";
import { motion, useScroll } from "framer-motion";
const MainContent = () => {
  const { scrollYProgress } = useScroll();
  return (
    <div
      className="min-h-screen relative bg-cover bg-center"
      style={{
        width: "100vw",
        backgroundImage: `url(${bg})`,
      }}
    >
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />

      <Landing />
      <div className="mx-4">
        <div className="text-black text-xs fixed bottom-2 z-10 -translate-x-1/2 left-1/2 opacity-80 ">
          Powered By <span className="font-bold">Ecommerce Team</span>
        </div>
        <InvText />
        <Sec3 />
        <Form />
        <Snowfall
          // images={images}npm
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

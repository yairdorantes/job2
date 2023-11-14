import axios from "axios";
import { api } from "./api";
import Snowfall from "react-snowfall";
import bg from "./media/tree.jpg";
import Swal from "sweetalert2";
import Form from "./components/Form";
import Landing from "./components/Landing";
import InvText from "./components/InvText";
function App() {

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
        backgroundImage: `linear-gradient(rgba(4, 4, 4, 0.245), rgba(12, 12, 12, 0.696)), url(${bg})`,
      }}
    >
      <Landing
      />
      <InvText/>
      <Form/>
      <Snowfall
      speed={[.5,.5]}
        radius={[2, 4]}
        snowflakeCount={200}
        style={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
        }}
      />
 
    </div>
  );
}

export default App;

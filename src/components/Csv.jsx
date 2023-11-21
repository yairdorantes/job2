import axios from "axios";
import CSVReader from "react-csv-reader";
import { api } from "../api";

const Csv = () => {
  const handleCSVFile = (data) => {
    // console.log(data);
    data.forEach((element) => {
      let id = element[2];
      if (/�/.test(id)) {
        id = element[2].replace(/\D/g, "");
      }
      if ((id === "") | (id === null) | (id === undefined)) {
        id = 0;
      }

      const newColab = {
        employee: id,
        name: element[3],
        area: element[0],
        position: element[1],
      };
      console.log(newColab.area);
      axios
        .post(`${api}/colabs`, newColab)
        .then((res) => {
          console.log("check");
        })
        .catch((err) => {
          console.log(err);
        });
    });
  };
  return (
    <div>
      CSV
      <CSVReader onFileLoaded={handleCSVFile}></CSVReader>
    </div>
  );
};

export default Csv;

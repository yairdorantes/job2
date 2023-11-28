import { useEffect, useState } from "react";
import useStore from "../Context";

const TimeLine = () => {
  const { location } = useStore();

  const [times, setTimes] = useState([]);
  useEffect(() => {
    if (location === 3) {
      setTimes([
        { time: "9:00 am - 10:00 am", title: "Celebración religiosa" },
        { time: "10:00 am - 11:10 am", title: "Desayuno" },
        { time: "11:30am", title: "Recepcion" },
      ]);
    } else if (location === 2) {
      setTimes([
        { time: "2:00 PM - 3:00 PM", title: "Recepción" },
        { time: "3:00 PM", title: "Comida" },
        { time: "4:30 PM", title: "1°Ronda de rifa" },
        { time: "6:30 PM", title: "2°Ronda de rifa" },
      ]);
    }
  }, [location]);

  return (
    <>
      {times.length > 0 && (
        <div className="max-w-lg ">
          <div className="mb-10">
            <div className="font-monsterrat text-center text-2xl text-red-600 font-bold ">
              Itinerario
            </div>
            <div className="border-t border-1 border-red-500  w-24 my-2 mx-auto"></div>
          </div>

          <ol className="relative border-s border-red-500">
            {times.map((time, i) => (
              <li key={i} className="mb-10 ms-4 text-black">
                <div className="absolute w-3 h-3 bg-blue-600 rounded-full mt-1.5 -start-1.5 border border-white "></div>
                <time className="mb-1 text-sm font-normal leading-none ">
                  {time.time}
                </time>
                <h3 className="text-lg font-semibold ">{time.title}</h3>
                {/* <p className="mb-4 text-base font-normal">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias
              dolores ullam repudiandae veritatis provident nesciunt est
            </p> */}
              </li>
            ))}
          </ol>
        </div>
      )}
    </>
  );
};

export default TimeLine;

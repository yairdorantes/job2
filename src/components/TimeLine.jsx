const TimeLine = () => {
  return (
    <div className="max-w-lg mx-auto">
      <ol className="relative border-s border-red-500">
        <li className="mb-10 ms-4 text-black">
          <div className="absolute w-3 h-3 bg-green-500 rounded-full mt-1.5 -start-1.5 border border-white "></div>
          <time className="mb-1 text-sm font-normal leading-none ">
            Comida Gratis 1
          </time>
          <h3 className="text-lg font-semibold ">Mmmm..</h3>
          <p className="mb-4 text-base font-normal">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias
            dolores ullam repudiandae veritatis provident nesciunt est
          </p>
        </li>
        <li className="mb-10 ms-4 text-black">
          <div className="absolute w-3 h-3 bg-green-500 rounded-full mt-1.5 -start-1.5 border border-white  "></div>
          <time className="mb-1 text-sm font-normal leading-none ">
            Bailongo
          </time>
          <h3 className="text-lg font-semibold ">YEEEi</h3>
          <p className="mb-4 text-base font-normal">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias
            dolores ullam repudiandae veritatis provident nesciunt est
          </p>
        </li>
      </ol>
    </div>
  );
};

export default TimeLine;

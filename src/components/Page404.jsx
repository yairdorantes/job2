import bg from "../media/quest.webp";
const Page404 = () => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(4, 4, 4, 0.696), rgba(12, 12, 12, 0.77)), url(${bg})`,
      }}
      className="flex justify-center items-center h-screen min-h-screen bg-cover bg-center"
    >
      <div className="text-center">
        <h1 className="mb-4 text-6xl font-semibold text-red-500">404</h1>
        <p className="mb-4 text-lg text-gray-100">
          Oops! Parece que estás perdido.
        </p>
        <div className="animate-bounce">
          <svg
            className="mx-auto h-16 w-16 text-red-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
            ></path>
          </svg>
        </div>

        {/* <p className="mt-4 text-gray-600">
          Let's get you back{" "}
          <a href="/" className="text-blue-500">
            home
          </a>
          .
        </p> */}
      </div>
    </div>
  );
};

export default Page404;

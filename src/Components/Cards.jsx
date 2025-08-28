import Github from "../assets/Github.png";

const Cards = ({ item }) => {
  return (
    <div className="group relative border border-gray-200 rounded-2xl w-[350px] lg:w-[400px] bg-white shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
      <div className="overflow-hidden rounded-t-2xl">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-56 object-cover transform group-hover:scale-105 transition duration-500"
        />
      </div>

      <div className="p-5 flex flex-col gap-3">
        <h1 className="font-bold text-2xl text-gray-800 group-hover:text-red-500 transition">
          {item.title}
        </h1>
        <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>

        <div className="mt-3 space-y-1 text-sm text-gray-700">
          <p>
            <span className="font-semibold text-gray-900">Frontend:</span>{" "}
            {item.Framework}
          </p>
          <p>
            <span className="font-semibold text-gray-900">
              Tools/Technology:
            </span>{" "}
            {item.ToolsTecnology}
          </p>
          {item?.backend && (
            <p>
              <span className="font-semibold text-gray-900">Backend:</span>{" "}
              {item.backend}
            </p>
          )}
        </div>

        <div className="flex flex-col lg:flex-row gap-3 mt-5">
          <a
            href={item.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-lg shadow-md hover:opacity-90 transition"
          >
            Live Preview
          </a>

          <div className="flex flex-1 gap-3">
            <a
              href={item.ClientSide}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center bg-gray-800 text-white px-4 py-2 rounded-lg shadow hover:bg-gray-900 transition gap-2"
            >
              <img src={Github} alt="GitHub Icon" className="w-5" />
              Client
            </a>
            {item.ServerSide && (
              <a
                href={item.ServerSide}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center bg-gray-700 text-white px-4 py-2 rounded-lg shadow hover:bg-gray-900 transition gap-2"
              >
                <img src={Github} alt="GitHub Icon" className="w-5" />
                Server
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;

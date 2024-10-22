import "./GlobalSearchStyle.css";
const GlobalSearch = () => {
  return (
    <div className="relative">
      <div className="group">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-search icon"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
        <input placeholder="Search Post..." type="search" className="input" />
      </div>
      <div className="absolute w-72 bg-white p-2 glassmorphisom rounded-b-md">
        <h6 className="font-semibold">Mahamudul Hasan </h6>
        <article>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ea
        </article>
        <div className="flex items-center text-sm">
          <button className="text-primary font-semibold w-24">
            View Details
          </button>
          <div className="w-full h-[1px] bg-gray-500"></div>
        </div>
      </div>
    </div>
  );
};

export default GlobalSearch;

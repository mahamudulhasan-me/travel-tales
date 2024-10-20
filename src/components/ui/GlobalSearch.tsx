import "./GlobalSearchStyle.css";
const GlobalSearch = () => {
  return (
    <>
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
        <input placeholder="Search..." type="search" className="input" />
      </div>
    </>
  );
};

export default GlobalSearch;

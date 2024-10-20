import "./LoaderStyles.css";
const Loader = () => {
  return (
    <div className="absolute inset-0 w-full h-full flex justify-center items-center z-[9999]">
      <div className="loading">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Loader;

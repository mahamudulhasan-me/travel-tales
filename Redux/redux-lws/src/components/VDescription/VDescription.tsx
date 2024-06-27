import LikeUnlike from "./LikeUnlike";

const VDescription = () => {
  return (
    <>
      {/* <!-- video description --> */}
      <div>
        <div className="pb-4 flex items-center justify-between border-b">
          <div className="flex flex-col items-start">
            <h1 className="text-lg font-semibold tracking-tight text-slate-800">
              Some video title
            </h1>
            <h2 className="text-sm leading-[1.7142857] text-slate-600 w-full">
              Uploaded on 23 Nov 2022
            </h2>
          </div>
          <LikeUnlike />
        </div>

        <div className="mt-4 text-sm text-[#334155] dark:text-slate-400">
          Some video description here
        </div>
      </div>
    </>
  );
};

export default VDescription;

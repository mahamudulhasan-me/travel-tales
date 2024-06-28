import { IVideo } from "../../redux/features/video/videoSlice";
import LikeUnlike from "./LikeUnlike";

const VDescription = ({ video }: { video: IVideo }) => {
  const { title, description, date, likes, unlikes } = video;
  return (
    <>
      {/* <!-- video description --> */}
      <div>
        <div className="pb-4 flex items-center justify-between border-b">
          <div className="flex flex-col items-start">
            <h1 className="text-lg font-semibold tracking-tight text-slate-800">
              {title}
            </h1>
            <h2 className="text-sm text-left leading-[1.7142857] text-slate-600 w-full">
              Uploaded on {date}
            </h2>
          </div>
          <LikeUnlike likes={likes} unlikes={unlikes} />
        </div>

        <div className="mt-4 text-sm text-left text-[#334155] dark:text-slate-400">
          {description}
        </div>
      </div>
    </>
  );
};

export default VDescription;

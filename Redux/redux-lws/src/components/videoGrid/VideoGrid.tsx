import { useEffect } from "react";
import {
  IInitialState,
  IVideo,
  fetchVideos,
} from "../../redux/features/videos/videosSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import Loading from "../ui/Loading";
import VideoGridItem from "./VideoGridItem";

const VideoGrid = () => {
  const dispatch = useAppDispatch();
  const { tags, search } = useAppSelector((state) => state.filter);
  const { videos, error, isError, isLoading }: IInitialState = useAppSelector(
    (state) => state.videos
  );

  useEffect(() => {
    dispatch(fetchVideos({ tags, search }));
  }, [dispatch, search, tags]);

  // decide what to render
  let content;
  if (isLoading) content = <Loading />;
  if (!isLoading && isError)
    content = <div className="col-span-12">{error}</div>;
  if (!isError && !isError && videos?.length === 0)
    content = <div className="col-span-12">{"Video Not Found!"}</div>;
  if (!isError && !isError && videos?.length > 0) {
    content = videos.map((video: IVideo) => (
      <VideoGridItem video={video} key={video.id} />
    ));
  }

  return (
    <>
      {/* <!-- Video Grid --> */}
      <section className="pt-12">
        <section className="pt-12">
          <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
            {content}
          </div>
        </section>
      </section>
    </>
  );
};

export default VideoGrid;

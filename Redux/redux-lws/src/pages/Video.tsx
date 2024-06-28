import { useEffect } from "react";
import { useParams } from "react-router";
import Player from "../components/VDescription/Player";
import VDescription from "../components/VDescription/VDescription";
import RelatedVideoList from "../components/videoList/RelatedVideoList";
import { fetchVideo } from "../redux/features/video/videoSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

const Video = () => {
  const { videoId } = useParams();
  const dispatch = useAppDispatch();
  const { video } = useAppSelector((state) => state.video);

  useEffect(() => {
    videoId && dispatch(fetchVideo(videoId));
  }, [dispatch, videoId]);

  const { id, link, title, tags } = video;

  return (
    <>
      <section className="pt-6 pb-20">
        <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
          <div className="grid grid-cols-3 gap-2 lg:gap-8">
            <div className="col-span-full w-full space-y-8 lg:col-span-2">
              <Player link={link} title={title} />
              <VDescription video={video} />
            </div>

            <RelatedVideoList currentVideoId={id} tags={tags} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Video;

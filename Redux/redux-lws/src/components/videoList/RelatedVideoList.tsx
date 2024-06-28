import { useEffect } from "react";
import { fetchRelatedVideos } from "../../redux/features/relatedVideo/relatedVideosSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import RelatedVideoListItem from "./RelatedVideoListItem";

const RelatedVideoList = ({
  currentVideoId,
  tags,
}: {
  currentVideoId: number;
  tags: string[];
}) => {
  const dispatch = useAppDispatch();
  const { videos } = useAppSelector((state) => state.relatedVideos);
  const LIMIT = 5;
  const query =
    tags.map((tag) => `tags_like=${tag}`).join("&") +
    `&id_ne=${currentVideoId}&_limit=${LIMIT}`;

  useEffect(() => {
    dispatch(fetchRelatedVideos(query));
  }, [dispatch, query]);

  return (
    <>
      {/* <!-- related videos --> */}
      <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
        {videos?.map((video) => (
          <RelatedVideoListItem video={video} key={video.id} />
        ))}
      </div>
    </>
  );
};

export default RelatedVideoList;

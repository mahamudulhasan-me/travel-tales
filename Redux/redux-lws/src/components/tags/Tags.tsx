import { useEffect } from "react";
import { fetchTags } from "../../redux/features/tags/tagsSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import Tag from "./Tag";

const Tags = () => {
  const dispatch = useAppDispatch();
  const { tags } = useAppSelector((state) => state.tags);

  useEffect(() => {
    dispatch(fetchTags());
  }, [dispatch]);
  return (
    tags?.length && (
      <>
        {/* <!-- Tags --> */}
        <section>
          <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b overflow-y-auto">
            {tags.map((tag) => (
              <Tag key={tag.id} title={tag.title} />
            ))}
          </div>
        </section>
      </>
    )
  );
};

export default Tags;

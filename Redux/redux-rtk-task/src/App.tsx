import "./App.css";
import { getVideo } from "./redux/features/videoSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {
  const dispatch = useAppDispatch();
  const video = useAppSelector((state) => state.video.video);
  const videoByTags = useAppSelector((state) => state.videoByTags.videos);

  // if (video.length) {
  //   const queryString = video?.tags
  //     .map((tag) => `tags_like=${encodeURIComponent(tag)}`)
  //     .join("&");
  //   dispatch(() => getVideoByFeatures(queryString));
  // }

  return (
    <>
      <p>Redux RTK Query</p>
      <button onClick={() => dispatch(getVideo())}>Get Video</button>
      {video && (
        <article>
          <h3>
            {" "}
            <strong>Title:</strong>
            {video?.title}
          </h3>
          <p>
            <strong>Description:</strong> {video?.description}
          </p>
          <p>{video?.tags.map((tag) => `#${tag} `)}</p>
        </article>
      )}
    </>
  );
}

export default App;

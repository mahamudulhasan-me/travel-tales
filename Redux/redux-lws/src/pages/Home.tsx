import Tags from "../components/tags/Tags";
import Pagination from "../components/ui/Pagination";
import VideoGrid from "../components/videoGrid/VideoGrid";

const Home = () => {
  return (
    <>
      <Tags />
      <VideoGrid />
      <Pagination />
    </>
  );
};

export default Home;

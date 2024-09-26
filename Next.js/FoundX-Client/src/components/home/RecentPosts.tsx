import { title } from "../primitives";
import Container from "../ui/Container";

import { getRecentPosts } from "@/src/services/recentPosts";

const RecentPosts = async () => {
  const { data: posts } = await getRecentPosts();

  console.log(posts);

  return (
    <Container>
      <h1 className={title()}>Recent Posts </h1>
      {posts?.map((post) => <div key={post.id}>{post.title}</div>)}
    </Container>
  );
};

export default RecentPosts;

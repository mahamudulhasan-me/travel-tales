import { title } from "@/src/components/primitives";
import Container from "@/src/components/ui/Container";
import { getRecentPosts } from "@/src/services/recentPosts";

const RecentPosts = async () => {
  const { data: posts } = await getRecentPosts();

  return (
    <Container>
      <h1 className={title()}>Recent Posts </h1>
      <div className="h-80">
        {posts?.map((post: any) => <div key={post.id}>{post.title}</div>)}
      </div>
    </Container>
  );
};

export default RecentPosts;

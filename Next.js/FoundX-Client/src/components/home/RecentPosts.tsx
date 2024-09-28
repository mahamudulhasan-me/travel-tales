import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { format } from "date-fns";
import Image from "next/image";

import { title } from "../primitives";
import Container from "../ui/Container";

import { getRecentPosts } from "@/src/services/recentPosts";

const RecentPosts = async () => {
  const { data: posts } = await getRecentPosts();

  return (
    <Container>
      <h1 className={title()}>Recent Posts </h1>
      <div className="grid grid-cols-4">
        {posts?.map((post) => (
          <Card key={post._id} className="py-4">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <p className="text-tiny uppercase font-bold">{post?.title}</p>
              <small className="text-default-500">
                {format(new Date(post.dateFound), "dd MMM yyyy")}
              </small>
              <h4 className="font-bold text-large">Frontend Radio</h4>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
              <Image
                alt="Card background"
                className="object-cover rounded-xl"
                height={270}
                src={post.images[0]}
                width={270}
              />
            </CardBody>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default RecentPosts;

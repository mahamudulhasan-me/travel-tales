import { ReactNode } from "react";

const NewsFeedLayout = ({
  PostWriting,
  Post,
}: {
  PostWriting: ReactNode;
  Post: ReactNode;
}) => {
  return (
    <div className="">
      {PostWriting}
      {Post}
      {Post}
    </div>
  );
};

export default NewsFeedLayout;

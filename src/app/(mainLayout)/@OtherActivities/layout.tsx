import { ReactNode } from "react";

const OtherActivitiesLayout = ({
  LatestPost,
  WhoToFollow,
}: {
  LatestPost: ReactNode;
  WhoToFollow: ReactNode;
}) => {
  return (
    <div className="md:flex hidden flex-col gap-y-5 mb-10 sticky top-20">
      {LatestPost} {WhoToFollow}
    </div>
  );
};

export default OtherActivitiesLayout;

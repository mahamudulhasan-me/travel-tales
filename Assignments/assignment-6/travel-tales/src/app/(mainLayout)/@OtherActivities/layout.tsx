import { ReactNode } from "react";

const OtherActivitiesLayout = ({
  LatestPost,
  WhoToFollow,
}: {
  LatestPost: ReactNode;
  WhoToFollow: ReactNode;
}) => {
  return (
    <div className="flex flex-col gap-y-5 mb-10">
      {LatestPost} {WhoToFollow}
    </div>
  );
};

export default OtherActivitiesLayout;

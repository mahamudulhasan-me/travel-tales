import { ReactNode } from "react";

const MainLayout = ({
  children,
  NewsFeed,
  OtherActivities,
  Profile,
}: {
  children: ReactNode;
  NewsFeed: ReactNode;
  OtherActivities: ReactNode;
  Profile: ReactNode;
}) => {
  const login = false;
  return (
    <div>
      {children}{" "}
      {login && (
        <div>
          {NewsFeed} {OtherActivities} {Profile}
        </div>
      )}
    </div>
  );
};

export default MainLayout;

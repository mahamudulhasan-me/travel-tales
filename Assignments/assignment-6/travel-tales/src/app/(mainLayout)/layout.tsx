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
  const login = true;
  return (
    <div>
      {children}
      {login && (
        <div className="container mx-auto px-5 grid grid-cols-12 gap-6 mt-6 ">
          <section className="col-span-3">{Profile}</section>
          <section className="col-span-6">{NewsFeed}</section>
          <section className="col-span-3">{OtherActivities}</section>
        </div>
      )}
    </div>
  );
};

export default MainLayout;

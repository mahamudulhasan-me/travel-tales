import { ReactNode } from "react";

const MainLayout = async ({
  NewsFeed,
  OtherActivities,
  Profile,
}: {
  children: ReactNode;
  NewsFeed: ReactNode;
  OtherActivities: ReactNode;
  Profile: ReactNode;
}) => {
  return (
    <>
      <div className="container mx-auto px-5 grid grid-cols-12 gap-6 mt-6 ">
        <section className="col-span-3">{Profile}</section>
        <section className="col-span-6">{NewsFeed}</section>
        <section className="col-span-3">{OtherActivities}</section>
      </div>
    </>
  );
};

export default MainLayout;

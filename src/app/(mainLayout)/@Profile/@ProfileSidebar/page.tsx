import Image from "next/image";
import Link from "next/link";

const ProfileSidebar = () => {
  const sidebarListItems = [
    {
      title: "Feed",
      link: "/",
      image: "/icons/feed.svg",
    },
    {
      title: "Connections",
      link: "/",
      image: "/icons/connections.svg",
    },
    {
      title: "Latest News",
      link: "/",
      image: "/icons/latestNews.svg",
    },
    {
      title: "Events",
      link: "/",
      image: "/icons/events.svg",
    },
    {
      title: "Groups",
      link: "/",
      image: "/icons/groups.svg",
    },
    {
      title: "Notifications",
      link: "/",
      image: "/icons/notifications.svg",
    },
    {
      title: "Settings",
      link: "/",
      image: "/icons/settings.svg",
    },
  ];
  return (
    <div className="p-5">
      {sidebarListItems.map((item, index) => (
        <>
          <Link
            key={index}
            href={item.link}
            className="flex items-center space-x-3 mb-3 group"
          >
            <Image src={item.image} width={24} height={24} alt={item.title} />
            <p className="font-[500] group-hover:text-primary transition-colors">
              {item.title}
            </p>
          </Link>
        </>
      ))}
    </div>
  );
};

export default ProfileSidebar;

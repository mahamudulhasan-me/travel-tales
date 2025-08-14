import FileText from "@/helper/icons/FileText";
import PremiumIcon from "@/helper/icons/Premium";
import Travelers from "@/helper/icons/Travellers";
import MoreThanCard from "./MoreThanCard";

const MoreThan = () => {
  const features = [
    {
      icon: <FileText />, // example: Lucide icon name
      title: "Rich Storytelling Experience",
      description:
        "Craft beautiful, media-rich travel stories with our built-in editor. Format your adventures, add photos, and bring your journey to life — no tech skills required.",
    },
    {
      icon: <Travelers />, // icon for social connection
      title: "Connect with Like-Minded Travelers",
      description:
        "Follow fellow explorers, upvote inspiring content, and engage in meaningful conversations through comments and interactions.",
    },
    {
      icon: <PremiumIcon />, // icon representing premium / secure content
      title: "Premium Access, Real Value",
      description:
        "Get verified and unlock exclusive travel tips, hidden destinations, and members-only guides from experienced globetrotters.",
    },
  ];

  return (
    <section className="container mx-auto px-5 my-20">
      <div className="flex flex-col items-center justify-center">
        <h1 className="md:text-3xl text-2xl font-bold text-gray-800 text-center">
          More Than Just Travel Stories
        </h1>
        <p className="text-gray-600 max-w-xl text-center mt-1 md:text-base text-sm">
          Explore meaningful experiences, connect with real travelers, and
          unlock exclusive insights.
        </p>
      </div>
      <div className="mt-10 flex lg:flex-row flex-col items-center justify-center gap-8">
        {features.map((feature, index) => (
          <MoreThanCard key={index} feature={feature} />
        ))}
      </div>
    </section>
  );
};

export default MoreThan;

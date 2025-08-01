const MoreThanCard = ({
  feature,
}: {
  feature: { icon: JSX.Element; title: string; description: string };
}) => {
  return (
    <div className="flex flex-col items-center justify-center">
      {feature?.icon}
      <h1 className="md:text-2xl text-xl text-center font-bold text-gray-800 mt-6 mb-2">
        {feature?.title}
      </h1>
      <p className="text-gray-600  text-center w-4/5">{feature?.description}</p>
    </div>
  );
};

export default MoreThanCard;

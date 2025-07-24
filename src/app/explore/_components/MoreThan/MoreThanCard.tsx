const MoreThanCard = ({ feature }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      {feature?.icon}
      <h1 className="text-2xl font-bold text-gray-800 mt-6 mb-2">
        {feature?.title}
      </h1>
      <p className="text-gray-600 text-center w-4/5">{feature?.description}</p>
    </div>
  );
};

export default MoreThanCard;

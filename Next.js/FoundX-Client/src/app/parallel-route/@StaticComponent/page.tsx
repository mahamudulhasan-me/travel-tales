import delay from "@/src/utils/dely";

const StaticComponent = async () => {
  await delay(2000);

  return (
    <div className="w-full h-96 bg-violet-600">ths is static component</div>
  );
};

export default StaticComponent;

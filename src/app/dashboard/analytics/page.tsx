import Analytics from "./Analytics";
import AnalyticsBreadcrumb from "./AnalyticsBreadcrumb";

export const metadata = {
  title: "Dashboard | Analytics",
  description: "Travel Tales",
};
const AnalyticsPage = () => {
  return (
    <div>
      <div className="bg-white common-shadow rounded-md w-full p-4">
        <AnalyticsBreadcrumb />
      </div>
      <Analytics />
    </div>
  );
};

export default AnalyticsPage;

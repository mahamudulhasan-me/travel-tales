import LatestPost from "@/app/(mainLayout)/@OtherActivities/@LatestPost/page";
import PaymentChart from "@/components/admin/charts/PaymentChart";
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
      <div className="grid grid-cols-12 mt-6 gap-x-4 items-stretch">
        <aside className="col-span-8">
          <PaymentChart />
        </aside>
        <aside className="col-span-4">
          <LatestPost />
        </aside>
      </div>
    </div>
  );
};

export default AnalyticsPage;

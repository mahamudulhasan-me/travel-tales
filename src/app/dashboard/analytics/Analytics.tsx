"use client";
import AnalyticsCard from "@/components/admin/analytics/AnalyticCard";
import Loader from "@/components/ui/Loader";
import useGet7DaysAnalytics from "@/hooks/report/useGet7DaysAnalytics";
import { BadgeDollarSign, Signpost, Users } from "lucide-react";

export interface IChartData {
  name: string;
  payments: number;
  posts: number;
  users: number;
}
const Analytics = () => {
  const { data, isLoading } = useGet7DaysAnalytics();

  if (isLoading) {
    return <Loader />;
  }

  const { chartData, totals } = data?.data;

  return (
    <div className="bg-white common-shadow rounded-md w-full p-4 mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
      <AnalyticsCard
        color="#CBDCEB"
        title="Total Users"
        count={totals?.totalUsers}
        chartColor="#2563eb"
        icon={<Users color="#2563eb" />}
        dataKey="users"
        data={chartData}
        trend={totals?.userChange}
      />
      <AnalyticsCard
        color="#D5FFE4"
        title="Total Posts"
        count={totals?.totalPosts}
        chartColor="#6528F7"
        icon={<Signpost color="#6528F7" />}
        dataKey="posts"
        data={chartData}
        trend={totals?.postChange}
      />
      <AnalyticsCard
        color="#FFFF80"
        title="Total Transaction"
        count={totals?.totalPayments}
        chartColor="#FF0080"
        icon={<BadgeDollarSign color="#FF0080" />}
        dataKey="payments"
        data={chartData}
        trend={totals?.paymentChange}
      />
    </div>
  );
};

export default Analytics;

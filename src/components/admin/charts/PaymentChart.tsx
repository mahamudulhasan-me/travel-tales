"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import Loader from "@/components/ui/Loader";
import useGetPaymentReport from "@/hooks/report/useGetPaymentReport";
import moment from "moment";

const chartConfig = {
  user: {
    label: "User",
    color: "#6528F7",
  },
  transactionCount: {
    label: "Transaction Count",
    color: "#FF0080",
  },
} satisfies ChartConfig;

interface IReportChartData {
  date: string;
  newUsers: number;
  transactionCount: number;
  totalPayment: number;
}
export default function PaymentChart() {
  const { data, isLoading } = useGetPaymentReport();
  if (isLoading) {
    return <Loader />;
  }

  const chartData = data?.data.map((item: IReportChartData) => {
    return {
      date: item.date,
      user: item.newUsers,
      transactionCount: item.transactionCount,
      transactionAmount: item.totalPayment,
    };
  });

  return (
    <Card className="mb-6 common-shadow">
      <CardHeader>
        <CardTitle>Payment Activity With User</CardTitle>
        <CardDescription>
          {moment(data?.data[0].date).format("DD MMM, YYYY")} -{" "}
          {moment(data?.data[data?.data.length - 1].date).format(
            "DD MMM, YYYY"
          )}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            width={500}
            height={300}
            data={chartData}
            margin={{ left: 12, right: 12 }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              // tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="user" fill="var(--color-user)" radius={4} />
            <Bar
              dataKey="transactionCount"
              fill="var(--color-transactionCount)"
              radius={4}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
      {/* <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter> */}
    </Card>
  );
}

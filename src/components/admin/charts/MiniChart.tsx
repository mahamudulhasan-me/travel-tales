"use client";
import { IChartData } from "@/app/dashboard/analytics/Analytics";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import { Line, LineChart } from "recharts";


const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#2563eb",
  },
  mobile: {
    label: "Mobile",
    color: "#60a5fa",
  },
} satisfies ChartConfig;

interface IMiniChartProps {
  color: string;
  dataKey: string;
  data: IChartData[];
}
const MiniChart = ({ color, dataKey, data }: IMiniChartProps) => {
  return (
    <>
      <ChartContainer config={chartConfig} className="w-full h-[100px]">
        <LineChart data={data}>
          <Line
            type="monotone"
            dataKey={dataKey}
            stroke={color}
            strokeWidth={2}
          />
        </LineChart>
      </ChartContainer>
    </>
  );
};

export default MiniChart;

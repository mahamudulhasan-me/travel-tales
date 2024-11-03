"use client";
import { IChartData } from "@/app/dashboard/analytics/Analytics";
import { AnimatedNumber } from "@/components/core/AnimatedNumber";
import { useInView } from "framer-motion";
import { TrendingUp } from "lucide-react";
import { ReactNode, useEffect, useRef, useState } from "react";
import MiniChart from "../charts/MiniChart";

interface IAnalyticsProps {
  count: number;
  icon: ReactNode;
  title: string;
  data: IChartData[];
  dataKey: "posts" | "users" | "payments";
  color: string;
  chartColor: string;
  trend: string;
}

const AnalyticsCard = ({
  count,
  icon,
  title,
  dataKey,
  data,
  color,
  chartColor,
  trend,
}: IAnalyticsProps) => {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView && value === 0) {
      setValue(count);
    }
  }, [isInView, count, value]);

  return (
    <div className="bg-white common-shadow rounded-md w-full p-4">
      <div className="flex justify-between items-start">
        <figure
          style={{ backgroundColor: color }}
          className={`size-12  rounded-full flex justify-center items-center`}
        >
          {icon}
        </figure>
        <h6 className="text-xl font-semibold text-gray-700">{title}</h6>
      </div>
      <h1 ref={ref} className="">
        <AnimatedNumber
          className="-mb-12 mt-4 inline-flex items-center  text-4xl font-semibold  "
          springOptions={{
            bounce: 0,
            duration: 10000,
          }}
          value={value}
        />
      </h1>
      <div className="flex md:flex-row flex-col-reverse justify-between items-end gap-1">
        <p className="flex items-center gap-x-2 text-green-600 font-semibold">
          <TrendingUp size={18} /> <span>{trend}</span>{" "}
          <span className="text-gray-500">Increased</span>
        </p>
        <>
          <MiniChart color={chartColor} dataKey={dataKey} data={data} />
        </>
      </div>
    </div>
  );
};

export default AnalyticsCard;

"use client";
import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const AnalyticsGames = () => {
  const data = [
    { name: "Jan", uv: 4000, pv: 2400, amt: 2400 },
    { name: "Feb", uv: 3000, pv: 1398, amt: 2210 },
    { name: "Mar", uv: 2000, pv: 9800, amt: 2290 },
    { name: "Apr", uv: 2780, pv: 3908, amt: 2000 },
    { name: "May", uv: 1890, pv: 4800, amt: 2181 },
    { name: "Jun", uv: 2390, pv: 3800, amt: 2500 },
    { name: "Jul", uv: 3490, pv: 4300, amt: 2100 },
  ];

  return (
    <div className="bg-slate-800 flex flex-col justify-between rounded-2xl p-4 w-[60%] h-[600px] ">
        <h1 className=" title">Last Played Games</h1>
      <ResponsiveContainer height="80%" width="100%" >
        <AreaChart
          width={500}
          height={200}
          data={data}
          syncId="anyId"
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <XAxis dataKey="name" stroke="#64748b" tick={{ fill: "#e2e8f0" }} />
          <YAxis stroke="#64748b" tick={{ fill: "#e2e8f0" }} />
          <Area
            type="basis"
            dataKey="pv"
            stroke="#0ea5e9"
            fill="#0ea5e956"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AnalyticsGames;

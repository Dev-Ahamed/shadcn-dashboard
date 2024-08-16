"use client";
import React from "react";
import {
  Bar,
  BarChart as BarGraph,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { month: "Jan", total: 1742 },
  { month: "Feb", total: 2879 },
  { month: "Mar", total: 1324 },
  { month: "Apr", total: 4517 },
  { month: "May", total: 2543 },
  { month: "Jun", total: 3119 },
  { month: "Jul", total: 4682 },
  { month: "Aug", total: 1497 },
  { month: "Sep", total: 2764 },
  { month: "Oct", total: 4880 },
  { month: "Nov", total: 1938 },
  { month: "Dec", total: 3672 },
];

export default function BarChart() {
  return (
    <ResponsiveContainer width={"100%"} height={350}>
      <BarGraph data={data}>
        <XAxis
          dataKey={"month"}
          tickLine={false}
          axisLine={false}
          stroke="#888888"
          fontSize={12}
        />
        <YAxis
          tickLine={false}
          axisLine={false}
          stroke="#888888"
          fontSize={12}
          tickFormatter={(value) => `$${value}`}
        />
        <Bar dataKey={"total"} radius={[4, 4, 0, 0]} />
      </BarGraph>
    </ResponsiveContainer>
  );
}

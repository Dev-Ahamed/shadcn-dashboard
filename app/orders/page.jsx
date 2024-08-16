"use client";
import { DataTable } from "@/components/DataTable";
import HomePageTitle from "@/components/HomePageTitle";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const data = [
  {
    order: "#001",
    status: "Pending",
    amount: 100,
    lastorder: "2024-01-01",
    method: "Credit Card",
  },
  {
    order: "#002",
    status: "Processing",
    amount: 200,
    lastorder: "2024-01-02",
    method: "Paypal",
  },
  {
    order: "#003",
    status: "Completed",
    amount: 300,
    lastorder: "2024-01-03",
    method: "Bank Transfer",
  },
  {
    order: "#004",
    status: "Pending",
    amount: 150,
    lastorder: "2024-01-04",
    method: "Credit Card",
  },
  {
    order: "#005",
    status: "Processing",
    amount: 250,
    lastorder: "2024-01-05",
    method: "Paypal",
  },
  {
    order: "#006",
    status: "Completed",
    amount: 350,
    lastorder: "2024-01-06",
    method: "Bank Transfer",
  },
  // Add more entries here up to 50
];

for (let i = 7; i <= 100; i++) {
  const statuses = ["Pending", "Processing", "Completed"];
  const methods = ["Credit Card", "Paypal", "Bank Transfer"];

  data.push({
    order: `#${String(i).padStart(3, "0")}`,
    status: statuses[Math.floor(Math.random() * statuses.length)],
    amount: Math.floor(Math.random() * 1000) + 100,
    lastorder: `2024-${String(Math.floor(Math.random() * 12) + 1).padStart(
      2,
      "0"
    )}-${String(Math.floor(Math.random() * 28) + 1).padStart(2, "0")}`,
    method: methods[Math.floor(Math.random() * methods.length)],
  });
}

export const columns = [
  {
    accessorKey: "order",
    header: "Order",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      return (
        <div
          className={cn("font-medium w-fit px-4 py-2 rounded-lg", {
            "bg-red-200": row.getValue("status") === "Pending",
            "bg-orange-200": row.getValue("status") === "Processing",
            "bg-green-200": row.getValue("status") === "Completed",
          })}
        >
          {row.getValue("status")}
        </div>
      );
    },
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
  {
    accessorKey: "lastorder",
    header: "Last order",
  },
  {
    accessorKey: "method",
    header: "Method",
  },
];

export default function Orders() {
  return (
    <div className="flex flex-col gap-5 w-full">
      <HomePageTitle title={"Orders"} />
      <DataTable columns={columns} data={data} />
    </div>
  );
}

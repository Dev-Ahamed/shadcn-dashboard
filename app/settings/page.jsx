"use client";
import { DataTable } from "@/components/DataTable";
import HomePageTitle from "@/components/HomePageTitle";
import Image from "next/image";
import React from "react";

const data = [
  {
    category: "Account",
    value: true,
  },
  {
    category: "Notifications",
    value: false,
  },
  {
    category: "Language",
    value: "English",
  },
  {
    category: "Theme",
    value: "Dark",
  },
];

export const columns = [
  {
    accessorKey: "category",
    header: "Category",
  },
  {
    accessorKey: "value",
    header: "Value",
  },
];

export default function Settings() {
  return (
    <div className="flex flex-col gap-5 w-full">
      <HomePageTitle title={"Settings"} />
      <DataTable columns={columns} data={data} />
    </div>
  );
}

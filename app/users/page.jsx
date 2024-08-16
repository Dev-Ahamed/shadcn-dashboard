"use client";
import { DataTable } from "@/components/DataTable";
import HomePageTitle from "@/components/HomePageTitle";
import Image from "next/image";
import React from "react";

const data = [
  {
    name: "Ahamed",
    email: "ahamed@example.com",
    amount: 100,
    lastorder: "2024-01-01",
    method: "Credit Card",
  },
  {
    name: "Ahamed",
    email: "ahamed@example.com",
    amount: 150,
    lastorder: "2024-01-15",
    method: "Paypal",
  },
  {
    name: "John Doe",
    email: "john.doe@example.com",
    amount: 250,
    lastorder: "2024-02-10",
    method: "Bank Transfer",
  },
  {
    name: "Jane Smith",
    email: "jane.smith@example.com",
    amount: 320,
    lastorder: "2024-03-15",
    method: "Credit Card",
  },
  {
    name: "Emily Davis",
    email: "emily.davis@example.com",
    amount: 180,
    lastorder: "2024-04-05",
    method: "Paypal",
  },
  {
    name: "Michael Brown",
    email: "michael.brown@example.com",
    amount: 500,
    lastorder: "2024-05-20",
    method: "Credit Card",
  },
  {
    name: "Sarah Wilson",
    email: "sarah.wilson@example.com",
    amount: 450,
    lastorder: "2024-06-12",
    method: "Bank Transfer",
  },
  {
    name: "David Lee",
    email: "david.lee@example.com",
    amount: 210,
    lastorder: "2024-07-25",
    method: "Paypal",
  },
  {
    name: "Sophia Clark",
    email: "sophia.clark@example.com",
    amount: 370,
    lastorder: "2024-08-14",
    method: "Credit Card",
  },
  {
    name: "James Hall",
    email: "james.hall@example.com",
    amount: 280,
    lastorder: "2024-09-09",
    method: "Bank Transfer",
  },
  {
    name: "Olivia Martinez",
    email: "olivia.martinez@example.com",
    amount: 320,
    lastorder: "2024-10-03",
    method: "Credit Card",
  },
  {
    name: "Liam Young",
    email: "liam.young@example.com",
    amount: 210,
    lastorder: "2024-11-11",
    method: "Paypal",
  },
  {
    name: "Noah Harris",
    email: "noah.harris@example.com",
    amount: 450,
    lastorder: "2024-12-25",
    method: "Bank Transfer",
  },
  {
    name: "Emma King",
    email: "emma.king@example.com",
    amount: 600,
    lastorder: "2024-01-07",
    method: "Credit Card",
  },
  {
    name: "William Scott",
    email: "william.scott@example.com",
    amount: 550,
    lastorder: "2024-02-14",
    method: "Paypal",
  },
  {
    name: "Isabella Turner",
    email: "isabella.turner@example.com",
    amount: 420,
    lastorder: "2024-03-22",
    method: "Credit Card",
  },
  {
    name: "Elijah Campbell",
    email: "elijah.campbell@example.com",
    amount: 310,
    lastorder: "2024-04-28",
    method: "Bank Transfer",
  },
  {
    name: "Mia Adams",
    email: "mia.adams@example.com",
    amount: 270,
    lastorder: "2024-05-10",
    method: "Paypal",
  },
  {
    name: "Benjamin Baker",
    email: "benjamin.baker@example.com",
    amount: 530,
    lastorder: "2024-06-30",
    method: "Credit Card",
  },
  {
    name: "Charlotte Johnson",
    email: "charlotte.johnson@example.com",
    amount: 620,
    lastorder: "2024-07-19",
    method: "Bank Transfer",
  },
  {
    name: "Lucas Robinson",
    email: "lucas.robinson@example.com",
    amount: 490,
    lastorder: "2024-08-21",
    method: "Paypal",
  },
  {
    name: "Harper Walker",
    email: "harper.walker@example.com",
    amount: 400,
    lastorder: "2024-09-18",
    method: "Credit Card",
  },
  {
    name: "Alexander Green",
    email: "alexander.green@example.com",
    amount: 360,
    lastorder: "2024-10-10",
    method: "Bank Transfer",
  },
  {
    name: "Ava Wright",
    email: "ava.wright@example.com",
    amount: 430,
    lastorder: "2024-11-02",
    method: "Paypal",
  },
  {
    name: "Mason Lewis",
    email: "mason.lewis@example.com",
    amount: 290,
    lastorder: "2024-12-27",
    method: "Credit Card",
  },
  {
    name: "Evelyn Hill",
    email: "evelyn.hill@example.com",
    amount: 680,
    lastorder: "2024-01-23",
    method: "Bank Transfer",
  },
  {
    name: "Logan Perez",
    email: "logan.perez@example.com",
    amount: 310,
    lastorder: "2024-02-17",
    method: "Paypal",
  },
  {
    name: "Abigail White",
    email: "abigail.white@example.com",
    amount: 520,
    lastorder: "2024-03-08",
    method: "Credit Card",
  },
  {
    name: "Henry Harris",
    email: "henry.harris@example.com",
    amount: 470,
    lastorder: "2024-04-12",
    method: "Bank Transfer",
  },
  {
    name: "Grace Thompson",
    email: "grace.thompson@example.com",
    amount: 330,
    lastorder: "2024-05-04",
    method: "Paypal",
  },
  {
    name: "Samuel Martinez",
    email: "samuel.martinez@example.com",
    amount: 280,
    lastorder: "2024-06-15",
    method: "Credit Card",
  },
  {
    name: "Ella Moore",
    email: "ella.moore@example.com",
    amount: 410,
    lastorder: "2024-07-13",
    method: "Bank Transfer",
  },
  {
    name: "Daniel Taylor",
    email: "daniel.taylor@example.com",
    amount: 540,
    lastorder: "2024-08-06",
    method: "Paypal",
  },
  {
    name: "Chloe Brown",
    email: "chloe.brown@example.com",
    amount: 470,
    lastorder: "2024-09-15",
    method: "Credit Card",
  },
  {
    name: "Matthew Davis",
    email: "matthew.davis@example.com",
    amount: 490,
    lastorder: "2024-10-22",
    method: "Bank Transfer",
  },
  {
    name: "Ella Wilson",
    email: "ella.wilson@example.com",
    amount: 350,
    lastorder: "2024-11-09",
    method: "Paypal",
  },
  {
    name: "Sebastian Johnson",
    email: "sebastian.johnson@example.com",
    amount: 610,
    lastorder: "2024-12-02",
    method: "Credit Card",
  },
  {
    name: "Sofia Lee",
    email: "sofia.lee@example.com",
    amount: 490,
    lastorder: "2024-01-30",
    method: "Bank Transfer",
  },
  {
    name: "Aiden King",
    email: "aiden.king@example.com",
    amount: 380,
    lastorder: "2024-02-25",
    method: "Paypal",
  },
  {
    name: "Victoria Lewis",
    email: "victoria.lewis@example.com",
    amount: 620,
    lastorder: "2024-03-19",
    method: "Credit Card",
  },
  {
    name: "Jack Brown",
    email: "jack.brown@example.com",
    amount: 290,
    lastorder: "2024-04-07",
    method: "Bank Transfer",
  },
  {
    name: "Scarlett Anderson",
    email: "scarlett.anderson@example.com",
    amount: 470,
    lastorder: "2024-05-26",
    method: "Paypal",
  },
  {
    name: "Luke Martinez",
    email: "luke.martinez@example.com",
    amount: 380,
    lastorder: "2024-06-20",
    method: "Credit Card",
  },
  {
    name: "Zoe Garcia",
    email: "zoe.garcia@example.com",
    amount: 440,
    lastorder: "2024-07-30",
    method: "Bank Transfer",
  },
  {
    name: "Hannah Thompson",
    email: "hannah.thompson@example.com",
    amount: 320,
    lastorder: "2024-08-11",
    method: "Paypal",
  },
  {
    name: "Mason Lee",
    email: "mason.lee@example.com",
    amount: 590,
    lastorder: "2024-09-03",
    method: "Credit Card",
  },
  {
    name: "Lily Scott",
    email: "lily.scott@example.com",
    amount: 340,
    lastorder: "2024-10-16",
    method: "Bank Transfer",
  },
  {
    name: "Ethan Walker",
    email: "ethan.walker@example.com",
    amount: 620,
    lastorder: "2024-11-28",
    method: "Paypal",
  },
  {
    name: "Aubrey White",
    email: "aubrey.white@example.com",
    amount: 380,
    lastorder: "2024-12-18",
    method: "Credit Card",
  },
];

export const columns = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => {
      return (
        <div className="h-10 w-10 rounded-full bg-gray-100 p-1 flex gap-2 items-center">
          <Image
            src={`https://api.dicebear.com/9.x/lorelei/svg?seed=${row.getValue(
              "name"
            )}`}
            alt="avatar"
            width={200}
            height={200}
          />
          <p>{row.getValue("name")}</p>
        </div>
      );
    },
  },
  {
    accessorKey: "email",
    header: "Email",
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

export default function Users() {
  return (
    <div className="flex flex-col gap-5 w-full">
      <HomePageTitle title={"Users"} />
      <DataTable columns={columns} data={data} />
    </div>
  );
}

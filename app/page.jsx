import BarChart from "@/components/BarChart";
import Cards, { CardContent } from "@/components/Cards";
import HomePageTitle from "@/components/HomePageTitle";
import SalesCard from "@/components/SalesCard";
import { Activity, CreditCard, DollarSign, Users } from "lucide-react";

const cardData = [
  {
    label: "Total Revenue",
    amount: "$100,000.45",
    description: "+2.5% from last month",
    icon: DollarSign,
  },
  {
    label: "Subscription",
    amount: "+2350",
    description: "+10.5% from last month",
    icon: Users,
  },
  {
    label: "Sales",
    amount: "$12,300",
    description: "+5.6% from last month",
    icon: CreditCard,
  },
  {
    label: "Active Now",
    amount: "+573",
    description: "+150 since last month",
    icon: Activity,
  },
];

const salesData = [
  {
    name: "Ahamed",
    email: "ahamed@gmail.com",
    saleAmount: "+$1000",
  },
  {
    name: "John Doe",
    email: "john.doe@example.com",
    saleAmount: "+$1500",
  },
  {
    name: "Jane Smith",
    email: "jane.smith@example.com",
    saleAmount: "+$2000",
  },
  {
    name: "Emily Davis",
    email: "emily.davis@example.com",
    saleAmount: "+$750",
  },
  {
    name: "Michael Brown",
    email: "michael.brown@example.com",
    saleAmount: "+$1200",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-5 w-full">
      <HomePageTitle title="Dashboard" />

      <section className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4 ">
        {cardData.map((item, index) => (
          <Cards
            key={index}
            label={item.label}
            amount={item.amount}
            description={item.description}
            icon={item.icon}
          />
        ))}
      </section>

      <section className="grid grid-cols-1 gap-4 transition-all lg:grid-cols-2">
        {/* overview */}
        <CardContent>
          <p className="p-4 font-semibold">Overview</p>
          <BarChart />
        </CardContent>

        {/* Recent Sales */}
        <CardContent className="flex justify-between gap-4">
          <section>
            <p>Recent Sales</p>
            <p className="text-sm text-gray-400">
              You made 250 sales this month
            </p>
          </section>

          {salesData.map((item, index) => (
            <SalesCard
              key={index}
              name={item.name}
              email={item.email}
              saleAmount={item.saleAmount}
            />
          ))}
        </CardContent>
      </section>
    </div>
  );
}

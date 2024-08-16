import Image from "next/image";
import React from "react";

export default function SalesCard(props) {
  return (
    <div className="flex flex-wrap justify-between gap-3">
      <section className="flex justify-between gap-3">
        {/* Avatar */}
        <div className="h-12 w-12 rounded-full bg-gray-100 p-1">
          <Image
            src={`https://api.dicebear.com/9.x/lorelei/svg?seed=${props.name}`}
            alt="avatar"
            width={200}
            height={200}
          />
        </div>
        {/* Name & Email */}
        <div className="text-sm ">
          <p>{props.name}</p>
          <div className="text-ellipsis overflow-hidden whitespace-nowrap w-[120px] sm:w-auto text-gray-400">
            <p>{props.email}</p>
          </div>
        </div>
      </section>
      <p className="font-semibold">{props.saleAmount}</p>
    </div>
  );
}

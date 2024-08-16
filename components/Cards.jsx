import { cn } from "@/lib/utils";
import React from "react";

export default function Cards(props) {
  return (
    <CardContent>
      <section className="flex justify-between gap-2">
        {/* label */}
        <p>{props.label}</p>
        {/* icon */}
        <props.icon className="h-4 w-4 text-gray-400" />
      </section>

      <section>
        {/* amount */}
        <h2 className="text-2xl font-semibold">{props.amount}</h2>
        <p className="text-xs text-gray-500">{props.description}</p>
      </section>
    </CardContent>
  );
}

export function CardContent(props) {
  return (
    <div
      {...props}
      className={cn(
        "flex w-full flex-col gap-3 rounded-xl border p-5 shadow",
        props.className
      )}
    />
  );
}

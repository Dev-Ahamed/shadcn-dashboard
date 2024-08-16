import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import SideNavbar from "@/components/SideNavbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shadcn UI Dashboard",
  description: "Create dashboard with shadcn ui and next js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen w-full bg-white text-black flex",
          inter.className,
          {
            "debug-screens": process.env.NODE_ENV === "development",
          }
        )}
      >
        {/* sidebar */}
        <SideNavbar />
        {/* main page */}
        <div className="p-8 w-full">{children}</div>
      </body>
    </html>
  );
}

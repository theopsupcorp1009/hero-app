import { App } from "@/app/types/apps.type";
import React from "react";
import TrendingAppCard from "./TrendingAppCard";
import Link from "next/link";
import { getAllApps } from "@/lib/apps";

const TrendingApp = async () => {
  const data: App[] = await getAllApps();

  return (
    <section className="bg-[#FBF9F5] py-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="text-center mb-10">
          <span className="text-xs font-semibold tracking-[0.18em] uppercase text-[#B96845]">
            Discover
          </span>

          <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-[#292A27] tracking-tight">
            Trending Apps
          </h2>

          <p className="mt-2 text-[#817B73] text-sm md:text-base">
            Explore all trending apps on the market developed by us
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full mb-12">
          {data.slice(0, 8).map((app: App) => (
            <TrendingAppCard key={app.id} app={app} />
          ))}
        </div>

        <Link
          href="/apps"
          className="inline-flex items-center justify-center h-11 px-8 rounded-xl bg-[#B96845] hover:bg-[#A95C3C] text-white font-semibold transition-all duration-200 hover:-translate-y-0.5 shadow-[0_6px_18px_rgba(185,104,69,0.16)]"
        >
          Show All
        </Link>
      </div>
    </section>
  );
};

export default TrendingApp;
import React from "react";
import { App } from "../types/apps.type";
import { getAllApps } from "@/lib/apps";
import AllAppsClient from "./AllAppsClient";

const AllAppPage = async () => {
  const data: App[] = await getAllApps();

  return (
    <section className="bg-[#f8f9fc] py-16 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#0f172a] mb-2">
            Our All Applications
          </h1>
          <p className="text-gray-500 text-sm md:text-base">
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
        </div>

        <AllAppsClient initialApps={data} />

      </div>
    </section>
  );
};

export default AllAppPage;
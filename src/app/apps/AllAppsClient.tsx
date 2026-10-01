"use client";

import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import TrendingAppCard from "../components/homepage/TrendingAppCard";
import { App } from '@/app/types/apps.type';

interface AllAppsClientProps {
  initialApps: App[];
}

export default function AllAppsClient({ initialApps = [] }: AllAppsClientProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredApps = initialApps.filter((app: App) =>
    app.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <h2 className="text-lg font-bold text-[#0f172a]">
          ({filteredApps.length}) Apps Found
        </h2>

        <div className="relative w-full sm:w-72">
          <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-base" />
          <input
            type="search"
            placeholder="search Apps"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#7c4dff] transition-colors shadow-sm"
          />
        </div>
      </div>

      {filteredApps.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full mb-12">
          {filteredApps.map((app: App) => (
            <TrendingAppCard key={app.id} app={app} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-white rounded-xl border border-gray-100 my-8">
          <p className="text-gray-500 font-medium">
            No apps found matching "{searchQuery}"
          </p>
        </div>
      )}
    </>
  );
}
"use client";

import React, { useContext, useState } from "react";
import Image from "next/image";
import { FiDownload } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { AppContext } from "@/context/AppContext";
import { App } from "@/app/types/apps.type";
import { toast } from "react-toastify";

const InstallationPage = () => {
  const { installedApps, setInstalledApps } = useContext(AppContext);
  const [sortBy, setSortBy] = useState("size");

  const handleUninstall = (id: number) => {
    const newInstalledApps = installedApps.filter(
      (app: App) => Number(app.id) !== id,
    );
    setInstalledApps(newInstalledApps);
    toast.error(`Uninstalled`);
  };

  // Sort apps based on current selection
  const sortedApps = [...(installedApps || [])].sort((a: App, b: App) => {
    if (sortBy === "size") return b.size - a.size;
    if (sortBy === "title") return a.title.localeCompare(b.title);
    return 0;
  });

  return (
    <div className="min-h-screen bg-[#FBF9F5] px-4 py-12 md:px-8 md:py-16">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#B96845]">
              App Library
            </span>

            <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-[#292A27] md:text-4xl">
              Your Installed Apps
            </h1>

            <p className="mt-2 max-w-xl text-sm leading-6 text-[#817B73]">
              Manage and keep track of all the applications installed on your
              device.
            </p>
          </div>

          {/* App Count */}
          <div className="flex items-center gap-3 rounded-2xl border border-[#E7DFD6] bg-white px-5 py-3">
            <span className="text-2xl font-bold text-[#292A27]">
              {installedApps?.length || 0}
            </span>

            <span className="text-xs font-medium text-[#918B83]">
              Installed Apps
            </span>
          </div>
        </div>

        {/* Toolbar */}
        <div className="mt-10 flex flex-col gap-4 border-b border-[#E7DFD6] pb-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm font-medium text-[#6F6A63]">
            Your application collection
          </p>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="h-10 rounded-xl border border-[#E2DAD1] bg-white px-4 text-sm font-medium text-[#5F5A54] outline-none transition-colors cursor-pointer focus:border-[#B96845]"
          >
            <option value="size">Sort By Size</option>
            <option value="title">Sort By Title</option>
          </select>
        </div>

        {/* Apps */}
        <div className="mt-6">
          {!installedApps || installedApps.length === 0 ? (
            <div className="rounded-[28px] border border-[#E7DFD6] bg-white px-6 py-20 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F4EAE2] text-[#B96845]">
                <FiDownload className="text-2xl" />
              </div>

              <h2 className="mt-5 text-xl font-bold text-[#292A27]">
                No Apps Installed
              </h2>

              <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-[#918B83]">
                Apps you install from the marketplace will appear here.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {sortedApps.map((app: App) => (
                <div
                  key={app.id}
                  className="group rounded-[22px] border border-[#E7DFD6] bg-white p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#D8C9BC] hover:shadow-[0_14px_35px_rgba(65,51,39,0.07)]"
                >
                  <div className="flex items-center gap-4">
                    {/* App Image */}
                    <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-[18px] bg-[#F3EEE7] p-1">
                      <Image
                        src={app.image}
                        alt={app.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Main Info */}
                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0">
                          <h3 className="truncate text-base font-bold text-[#292A27] md:text-lg">
                            {app.title}
                          </h3>

                          <p className="mt-1 text-xs text-[#9A938A]">
                            Installed application
                          </p>
                        </div>

                        <button
                          onClick={() => handleUninstall(app.id)}
                          className="cursor-pointer shrink-0 rounded-xl border border-[#E7DFD6] px-3.5 py-2 text-xs font-semibold text-[#756E66] transition-all duration-200 hover:border-[#D7B9A8] hover:bg-[#FBF3EE] hover:text-[#A65D3E]"
                        >
                          Uninstall
                        </button>
                      </div>

                      {/* App Metadata */}
                      <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs">
                        <div className="flex items-center gap-1.5 text-[#77716A]">
                          <FiDownload className="text-[#B96845]" />
                          <span>{app.downloads}</span>
                        </div>

                        <div className="flex items-center gap-1.5 text-[#77716A]">
                          <FaStar className="text-[#C9825C]" />
                          <span>{app.ratingAvg}</span>
                        </div>

                        <span className="h-1 w-1 rounded-full bg-[#D8D0C7]" />

                        <span className="text-[#918B83]">{app.size} MB</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InstallationPage;

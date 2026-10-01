import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiDownload, FiArrowUpRight } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { App } from "@/app/types/apps.type";

interface TrendingAppCardProps {
  app: App;
}

const TrendingAppCard: React.FC<TrendingAppCardProps> = ({ app }) => {
  return (
    <Link
      href={`/apps/${app.id}`}
      className="group relative flex flex-col overflow-hidden rounded-[24px] bg-white border border-[#E8E1D8] transition-all duration-300 hover:border-[#D7C8BB] hover:shadow-[0_20px_45px_rgba(60,48,38,0.10)]"
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden bg-[#F3EEE7]">
        <Image
          src={app.image}
          alt={app.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />

        {/* Overlay */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/35 to-transparent" />

        {/* Rating */}
        <div className="absolute left-4 bottom-4 flex items-center gap-1.5 text-white">
          <FaStar className="text-xs text-[#F3C58B]" />
          <span className="text-sm font-semibold">{app.ratingAvg}</span>
        </div>

        {/* Arrow */}
        <div className="absolute right-4 bottom-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#292A27] shadow-md transition-all duration-300 group-hover:bg-[#B96845] group-hover:text-white">
          <FiArrowUpRight className="text-lg" />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        <div>
          <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#B96845]">
            Trending App
          </p>

          <h3 className="text-xl font-bold tracking-tight text-[#292A27] line-clamp-1">
            {app.title}
          </h3>

          <p className="mt-2 text-sm leading-6 text-[#817B73]">
            A carefully crafted digital experience designed for everyday use.
          </p>
        </div>

        {/* Bottom Info */}
        <div className="mt-6 flex items-end justify-between border-t border-[#EEE8E0] pt-4">
          <div>
            <p className="text-[11px] uppercase tracking-wide text-[#A29A91]">
              Downloads
            </p>

            <div className="mt-1 flex items-center gap-1.5 text-sm font-semibold text-[#4A4844]">
              <FiDownload className="text-[#B96845]" />
              {app.downloads}
            </div>
          </div>

          <span className="text-xs font-medium text-[#9A938A] transition-colors group-hover:text-[#B96845]">
            Explore app
          </span>
        </div>
      </div>
    </Link>
  );
};

export default TrendingAppCard;
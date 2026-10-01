import React from "react";

const Statistics = () => {
  return (
    <section className="bg-[#F7F3ED] text-[#292A27] py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12">
          Trusted By Millions, Built For You
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0">
          <div className="flex flex-col items-center space-y-2 md:border-r md:border-[#E3DCD3]">
            <span className="text-sm font-medium text-[#817B73] tracking-wide">
              Total Downloads
            </span>

            <span className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#292A27]">
              29.6M
            </span>

            <span className="text-xs text-[#9A938A]">
              21% More Than Last Month
            </span>
          </div>

          <div className="flex flex-col items-center space-y-2 md:border-r md:border-[#E3DCD3]">
            <span className="text-sm font-medium text-[#817B73] tracking-wide">
              Total Reviews
            </span>

            <span className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#292A27]">
              906K
            </span>

            <span className="text-xs text-[#9A938A]">
              46% More Than Last Month
            </span>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <span className="text-sm font-medium text-[#817B73] tracking-wide">
              Active Apps
            </span>

            <span className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#292A27]">
              132+
            </span>

            <span className="text-xs text-[#9A938A]">
              31 More Will Launch
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
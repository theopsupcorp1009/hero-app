import { getAllApps } from "@/lib/apps";
import { App, Rating } from "@/app/types/apps.type";
import Image from "next/image";
import { FiDownload } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { BiMessageSquareDetail } from "react-icons/bi";
import { notFound } from "next/navigation";
import InstalledAppButton from "@/app/components/buttons/InstalledAppButton";

type TAppDetailsProps = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  const allApps = await getAllApps();
  return allApps.map((app: App) => {
    return { id: String(app.id) };
  });
}

const AppDetailPage = async ({ params }: TAppDetailsProps) => {
  const { id } = await params;
  const allApps: App[] = await getAllApps();
  const app = allApps.find((app: App) => app.id === Number(id));

  if (!app) {
    notFound();
  }

  const maxRatingCount = Math.max(
    ...(app.ratings?.map((r: Rating) => Number(r.count)) || [1]),
    1,
  );

  return (
    <div className="min-h-screen bg-[#FBF9F5] px-4 py-10 md:px-8 md:py-16">
      <div className="mx-auto max-w-6xl">
        {/* Hero */}
        <section className="grid gap-8 lg:grid-cols-[1fr_320px]">
          {/* Main App Information */}
          <div className="rounded-[28px] border border-[#E8E1D8] bg-white p-6 md:p-9">
            <div className="flex flex-col gap-7 sm:flex-row">
              {/* App Icon */}
              <div className="relative h-32 w-32 shrink-0 overflow-hidden rounded-[26px] bg-[#F4EFE8] p-3 shadow-[0_12px_30px_rgba(65,51,39,0.08)] sm:h-40 sm:w-40">
                <Image
                  src={app.image}
                  alt={app.title}
                  fill
                  className="object-contain p-3"
                  priority
                />
              </div>

              {/* App Info */}
              <div className="flex flex-1 flex-col justify-center">
                <span className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#B96845]">
                  Application
                </span>

                <h1 className="text-3xl font-extrabold tracking-tight text-[#292A27] sm:text-4xl">
                  {app.title}
                </h1>

                <p className="mt-2 text-sm text-[#817B73]">
                  Developed by{" "}
                  <span className="font-semibold text-[#B96845]">
                    {app.companyName}
                  </span>
                </p>

                <p className="mt-5 max-w-2xl text-sm leading-7 text-[#77716A]">
                  {app.description}
                </p>

                <div className="mt-6">
                  <InstalledAppButton app={app} />
                </div>
              </div>
            </div>
          </div>

          {/* Rating Summary */}
          <div className="rounded-[28px] border border-[#E8E1D8] bg-[#F4EFE8] p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#91877D]">
              User Rating
            </p>

            <div className="mt-4 flex items-end gap-3">
              <span className="text-5xl font-extrabold tracking-tight text-[#292A27]">
                {app.ratingAvg}
              </span>

              <div className="mb-2">
                <div className="flex gap-1 text-[#C9825C]">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>

                <p className="mt-1 text-xs text-[#918B83]">
                  {app.reviews} total reviews
                </p>
              </div>
            </div>

            <div className="mt-7 h-px bg-[#DED5CB]" />

            <div className="mt-6">
              <p className="text-xs text-[#918B83]">Total Downloads</p>

              <p className="mt-1 text-2xl font-bold text-[#292A27]">
                {app.downloads}
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="mt-8 grid grid-cols-1 overflow-hidden rounded-[24px] border border-[#E8E1D8] bg-white sm:grid-cols-3">
          <div className="p-6 sm:border-r sm:border-[#EAE4DC]">
            <div className="flex items-center gap-2 text-[#B96845]">
              <FiDownload />
              <span className="text-xs font-semibold uppercase tracking-wide">
                Downloads
              </span>
            </div>

            <p className="mt-3 text-2xl font-bold text-[#292A27]">
              {app.downloads}
            </p>
          </div>

          <div className="border-t border-[#EAE4DC] p-6 sm:border-t-0 sm:border-r">
            <div className="flex items-center gap-2 text-[#B96845]">
              <FaStar />
              <span className="text-xs font-semibold uppercase tracking-wide">
                Average Rating
              </span>
            </div>

            <p className="mt-3 text-2xl font-bold text-[#292A27]">
              {app.ratingAvg}
            </p>
          </div>

          <div className="border-t border-[#EAE4DC] p-6 sm:border-t-0">
            <div className="flex items-center gap-2 text-[#B96845]">
              <BiMessageSquareDetail />
              <span className="text-xs font-semibold uppercase tracking-wide">
                Reviews
              </span>
            </div>

            <p className="mt-3 text-2xl font-bold text-[#292A27]">
              {app.reviews}
            </p>
          </div>
        </section>

        {/* Ratings */}
        <section className="mt-8 rounded-[28px] border border-[#E8E1D8] bg-white p-6 md:p-9">
          <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#B96845]">
                Feedback
              </span>

              <h2 className="mt-1 text-2xl font-bold text-[#292A27]">
                Ratings Breakdown
              </h2>
            </div>

            <p className="text-xs text-[#918B83]">
              Based on {app.reviews} reviews
            </p>
          </div>

          <div className="mt-8 max-w-4xl space-y-4">
            {app.ratings?.map((rating: Rating, index: number) => {
              const numericCount = Number(rating.count);
              const widthPercentage = (numericCount / maxRatingCount) * 100;

              return (
                <div
                  key={index}
                  className="grid grid-cols-[36px_1fr_50px] items-center gap-4"
                >
                  <span className="text-right text-xs font-semibold text-[#817B73]">
                    {rating.name}
                  </span>

                  <div className="h-2.5 overflow-hidden rounded-full bg-[#EEE9E2]">
                    <div
                      className="h-full rounded-full bg-[#C9825C] transition-all duration-500"
                      style={{
                        width: `${widthPercentage}%`,
                      }}
                    />
                  </div>

                  <span className="text-xs text-[#9A938A]">{rating.count}</span>
                </div>
              );
            })}
          </div>
        </section>

        {/* Description */}
        <section className="mt-8 rounded-[28px] border border-[#E8E1D8] bg-white p-6 md:p-9">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#B96845]">
            About the app
          </span>

          <h2 className="mt-1 text-2xl font-bold text-[#292A27]">
            Description
          </h2>

          <div className="mt-5 max-w-4xl whitespace-pre-line text-sm leading-8 text-[#77716A] md:text-base">
            {app.description}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AppDetailPage;

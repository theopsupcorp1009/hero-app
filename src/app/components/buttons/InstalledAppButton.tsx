"use client";

import { App } from "@/app/types/apps.type";
import { AppContext } from "@/context/AppContext";
import { useContext } from "react";
import { toast } from "react-toastify";

type TInstalledButtonPropsType = {
  app: App;
};

const InstalledAppButton = ({ app }: TInstalledButtonPropsType) => {
  const { installedApps, setInstalledApps } = useContext(AppContext);

  const installed = installedApps.some(
    (installedApp) => installedApp.id === app.id
  );

  const handleInstall = () => {
    if (installed) {
      toast.warning("Already installed");
      return;
    }

    setInstalledApps([...installedApps, app]);

    toast.success(`${app.title} installed successfully`);
  };

  return (
    <button
      onClick={handleInstall}
      disabled={installed}
      className={`btn ${
        installed
          ? "bg-gray-400 text-gray-700 cursor-not-allowed"
          : "bg-[#0e7c66] text-white"
      }`}
    >
      {installed ? "Installed" : `Install Now (${app.size} MB)`}
    </button>
  );
};

export default InstalledAppButton;
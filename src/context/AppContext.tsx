"use client";

import { App } from "@/app/types/apps.type";
import React, {
  createContext,
  ReactNode,
  useEffect,
  useState,
} from "react";

type TAppContext = {
  installedApps: App[];
  setInstalledApps: React.Dispatch<React.SetStateAction<App[]>>;
};

export const AppContext = createContext<TAppContext>({
  installedApps: [],
  setInstalledApps: () => {},
});

const AppProvider = ({ children }: { children: ReactNode }) => {
  const [installedApps, setInstalledApps] = useState<App[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const storedApps = localStorage.getItem("installedApps");

    if (storedApps) {
      try {
        const parsedApps: App[] = JSON.parse(storedApps);
        setInstalledApps(parsedApps);
      } catch (error) {
        console.error("Failed to load installed apps:", error);
        localStorage.removeItem("installedApps");
      }
    }

    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (!isLoaded) return;

    localStorage.setItem(
      "installedApps",
      JSON.stringify(installedApps)
    );
  }, [installedApps, isLoaded]);

  const sharedData: TAppContext = {
    installedApps,
    setInstalledApps,
  };

  return (
    <AppContext.Provider value={sharedData}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
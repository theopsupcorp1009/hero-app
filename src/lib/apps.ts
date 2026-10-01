import fs from "fs";
import path from "path";

export const getAllApps = async () => {
  const filePath = path.join(process.cwd(), "public", "data.json");
  const data = fs.readFileSync(filePath, "utf-8");

  return JSON.parse(data);
};
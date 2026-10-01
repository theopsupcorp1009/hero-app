export const getAllApps = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/data.json`);
  const data = await res.json();
  return data;
};
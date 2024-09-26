/* eslint-disable prettier/prettier */

import envConfig from "@/src/config/envConfig";
import delay from "@/src/utils/dely";

export const getRecentPosts = async () => {
  const res = await fetch(
    `${envConfig.baseUrl}/items?sortBy=-createdAt&limit=9`
  );

  await delay(5000);

  return res.json();
};

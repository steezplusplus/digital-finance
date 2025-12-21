import type { PageServerLoad } from './$types';
import { API_URL, API_KEY } from '$env/static/private';
import { error } from '@sveltejs/kit';

// TODO: Finish this type
type CloudCostData = {
  account: {};
  meta: any;
  period: {};
  reservations: [];
  spend: {};
  savings: {};
  tableConfig: {};
  utilization: {};
};

// TODO: try/catch...
const getCloudCostData = async (): Promise<CloudCostData> => {
  const response = await fetch(API_URL, {
    headers: {
      Authorization: `Bearer ${API_KEY}`
    }
  });

  if (!response.ok) {
    throw error(response.status, `Failed to fetch cloud cost data ${response.statusText}`);
  }

  return await response.json();
};

export const load: PageServerLoad = async () => {
  return await getCloudCostData();
};

import type { PageServerLoad } from './$types';
import { API_URL, API_KEY } from '$env/static/private';
import { error } from '@sveltejs/kit';
import type { CloudCostDataType } from '$lib/types';

// TODO: try/catch...
const getCloudCostData = async (): Promise<CloudCostDataType> => {
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
  return {
    cloudCostData: getCloudCostData()
  } ;
};

import type { PageServerLoad } from './$types';
import { API_URL, API_KEY } from '$env/static/private';

export const load: PageServerLoad = async () => {
  try {
    const response = await fetch(API_URL, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }

    const data = await response.json();

    return {
      data: data
    };
  } catch (error) {
    console.error('Failed to fetch dashboard data:', error);
    return {
      data: []
    };
  }
};

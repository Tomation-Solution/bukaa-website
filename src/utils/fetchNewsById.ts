// utils/fetchEventById.ts
import { ApiResponse, NewsData } from '../types';

export const fetchNewsById = async (id: string): Promise<NewsData> => {
  const tenantName = process.env.NEXT_PUBLIC_TENANT_NAME;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const response = await fetch(`${baseUrl}/tenant/${tenantName}/tenant/news/unauthorized_news/${id}`);
  const data = await response.json();
  console.log(data.data)
  return data.data;
};

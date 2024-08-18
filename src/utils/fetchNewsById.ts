// utils/fetchEventById.ts
import { NEXT_PUBLIC_TENANT_NAME, NEXT_PUBLIC_BASE_URL} from "@/config/config";
import { ApiResponse, NewsData } from '../types';

export const fetchNewsById = async (id: string): Promise<NewsData> => {
  const tenantName = NEXT_PUBLIC_TENANT_NAME;
  const baseUrl = NEXT_PUBLIC_BASE_URL;
  const response = await fetch(`${baseUrl}/tenant/${tenantName}/tenant/news/unauthorized_news/${id}`);
  const data = await response.json();
  console.log(data.data)
  return data.data;
};

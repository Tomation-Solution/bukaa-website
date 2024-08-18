import { NEXT_PUBLIC_TENANT_NAME, NEXT_PUBLIC_BASE_URL} from "@/config";
import { NewsItems } from '../types';

export const fetchNews = async (): Promise<NewsItems[]> => {
  const tenantName = NEXT_PUBLIC_TENANT_NAME;
  const baseUrl = NEXT_PUBLIC_BASE_URL;
  const response = await fetch(`${baseUrl}/tenant/${tenantName}/tenant/news/unauthorized_news/`);
  const data = await response.json();
  console.log(data)
  return data.data;
};


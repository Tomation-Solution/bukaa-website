import { NewsItems } from '../types';

export const fetchNews = async (): Promise<NewsItems[]> => {
  const tenantName = process.env.NEXT_PUBLIC_TENANT_NAME;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const response = await fetch(`${baseUrl}/tenant/${tenantName}/tenant/news/unauthorized_news/`);
  const data = await response.json();
  console.log(data)
  return data.data;
};


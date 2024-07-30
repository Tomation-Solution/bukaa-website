import { PublicationData } from '../types';

export const fetchPublicationById = async (id: string): Promise<PublicationData> => {
  const tenantName = process.env.NEXT_PUBLIC_TENANT_NAME;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const response = await fetch(`${baseUrl}/tenant/${tenantName}/tenant/publication/unauthorized_publications/${id}`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const result = await response.json();
  if (result.status_code !== 200) {
    throw new Error(result.message || "Failed to fetch data");
  }
  return result.data as PublicationData;
};

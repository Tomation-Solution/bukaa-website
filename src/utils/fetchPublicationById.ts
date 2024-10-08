import { NEXT_PUBLIC_TENANT_NAME, NEXT_PUBLIC_BASE_URL} from "@/config/config";
import { PublicationData } from '../types';

export const fetchPublicationById = async (id: string): Promise<PublicationData> => {
  const tenantName = NEXT_PUBLIC_TENANT_NAME;
  const baseUrl = NEXT_PUBLIC_BASE_URL;
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

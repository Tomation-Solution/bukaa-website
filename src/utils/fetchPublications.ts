import { NEXT_PUBLIC_TENANT_NAME, NEXT_PUBLIC_BASE_URL} from "@/config";
import { Publication } from '../types';

export const fetchPublications = async (): Promise<Publication[]> => {
  const tenantName = NEXT_PUBLIC_TENANT_NAME;
  const baseUrl = NEXT_PUBLIC_BASE_URL;
  const response = await fetch(`${baseUrl}/tenant/${tenantName}/tenant/publication/unauthorized_publications/`);
  const data = await response.json();
  return data.data;
};

import { Publication } from '../types';

export const fetchPublications = async (): Promise<Publication[]> => {
  const tenantName = process.env.NEXT_PUBLIC_TENANT_NAME;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const response = await fetch(`${baseUrl}/tenant/${tenantName}/tenant/publication/unauthorized_publications/`);
  const data = await response.json();
  return data.data;
};

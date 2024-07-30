import { GalleryData } from '../types';

export const fetchGalleryById = async (id: string): Promise<GalleryData> => {
  const tenantName = process.env.NEXT_PUBLIC_TENANT_NAME;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const response = await fetch(`${baseUrl}/tenant/${tenantName}/tenant/extras/gallery_version2/unauthorized_images/${id}/`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const result = await response.json();
  if (result.status_code !== 200) {
    throw new Error(result.message || "Failed to fetch data");
  }
  return result.data as GalleryData;
};

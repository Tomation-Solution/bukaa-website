import { GalleryFolder } from '../types';

export const fetchGalleryData = async (): Promise<GalleryFolder[]> => {
  const tenantName = process.env.NEXT_PUBLIC_TENANT_NAME;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const response = await fetch(`${baseUrl}/tenant/${tenantName}/tenant/extras/gallery_version2/get_unauthorized_images/`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const result = await response.json();
  if (result.status_code !== 200) {
    throw new Error(result.message || 'Failed to fetch data');
  }
  return result.data.data as GalleryFolder[];
};

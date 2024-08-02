// utils/fetchEventById.ts
import { ApiResponse } from '../types';

export const fetchEventById = async (id: string): Promise<ApiResponse> => {
  const tenantName = process.env.NEXT_PUBLIC_TENANT_NAME;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const response = await fetch(`${baseUrl}/tenant/${tenantName}/tenant/event/unauthorized_events/${id}`);
  const data = await response.json();
  return data;
};

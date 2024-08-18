// utils/fetchEventById.ts
import { NEXT_PUBLIC_TENANT_NAME, NEXT_PUBLIC_BASE_URL} from "@/config";
import { ApiResponse } from '../types';

export const fetchEventById = async (id: string): Promise<ApiResponse> => {
  const tenantName = NEXT_PUBLIC_TENANT_NAME;
  const baseUrl = NEXT_PUBLIC_BASE_URL;
  const response = await fetch(`${baseUrl}/tenant/${tenantName}/tenant/event/unauthorized_events/${id}`);
  const data = await response.json();
  return data;
};

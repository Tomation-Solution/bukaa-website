import { Event } from '../types';

export const fetchEvents = async (): Promise<Event[]> => {
  const tenantName = process.env.NEXT_PUBLIC_TENANT_NAME;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const response = await fetch(`${baseUrl}/tenant/${tenantName}/tenant/event/unauthorized_events/`);
  const data = await response.json();
  console.log(data.results)
  return data.results;
};


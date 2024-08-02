const tenantName = process.env.NEXT_PUBLIC_TENANT_NAME;
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const registerForEvent = async (formData: FormData) => {
  const response = await fetch(`${baseUrl}/tenant/${tenantName}/tenant/event/eventview/public_event_registeration/`, {
    method: 'POST',
    body: formData,
  });
  if (!response.ok) {
    const errorData = await response.json();
    throw errorData;
  }
  return response.json();
};

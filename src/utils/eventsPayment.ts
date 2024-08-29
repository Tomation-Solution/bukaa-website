import { NEXT_PUBLIC_BASE_URL } from "@/config/config";

const baseUrl = NEXT_PUBLIC_BASE_URL;

interface PaymentRequest {
  amount: string ;
  email: string;
  fullname: string;
  event_id: string;
  callback_url: string;
}

export const initiatePayment = async (paymentData: PaymentRequest) => {
  const response = await fetch(`${baseUrl}/tenant/bukaa/tenant/event/public/payment/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(paymentData),
  });

  const responseData = await response.json();

  if (!response.ok) {
    throw new Error(responseData.message || 'Payment initiation failed');
  }

  return responseData;
};

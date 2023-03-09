import { CandyPay } from "@candypay/checkout-sdk";

export const candypay = new CandyPay({
  api_keys: {
    public_api_key: process.env.NEXT_PUBLIC_CANDYPAY_PUBLIC_API_KEY!,
    private_api_key: process.env.CANDYPAY_PRIVATE_API_KEY!
  },
  network: "mainnet",
  config: {
    collect_shipping_address: false,
  },
});

import { NextApiRequest, NextApiResponse } from "next";

import { candypay } from "../../helpers";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { items } = req.body;

    try {
      const response = await candypay.session.create({
        success_url: "https://thebookstore-orcin.vercel.app/success",
        cancel_url: "https://thebookstore-orcin.vercel.app/",
        items: items,
        custom_data: {
          name: items[0].name,
          image: items[0].image,
          wallet_address: process.env.RECEIVER_WALLET!,
        },
      });

      return res.status(200).json(response);
    } catch (error) {
      console.log(error);

      return res.status(200).json({
        error: "Error creating session",
      });
    }
  } else {
    return res.status(405).json({
      error: "Method not allowed",
    });
  }
};

export default handler;

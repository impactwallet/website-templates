import { NextApiRequest, NextApiResponse } from "next";

import { candypay } from "../../helpers";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { items } = req.body;

    try {
      const response = await candypay.session.create({
        success_url: "https://corphacker.vercel.app/success",
        cancel_url: "https://corphacker.vercel.app/",
        tokens: [ "dust", "shdw"],
        items: items,
        discounts: {
          verified_creator_address:
            "EvAULQeoenFCfLGC4zNDWdKgadjXcEhz3srRBf9yY1Nz",
          discount: 0.5,
          name: "Corp Hacker",
          image:
            "https://i.ibb.co/Fb9hZRf/image.png",
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

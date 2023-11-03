import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  if (req.method === "POST") {
    console.log(req.session);
    //await req.session?.destroy();
    return res.end();
  }
  return res.status(405).end();
}

import { NextApiRequest, NextApiResponse } from "next";
import withHandler from "../../../lib/withHandler";
import { withApiSession } from "../../../lib/withSession";
import { Prisma } from "@prisma/client";

export interface ResponseType {
  ok: boolean;
  [key: string]: any;
}

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  if (req.method === "POST") {
    const {
      session: { user },
      body: { tweet },
    } = req;

    const newTweet = await db?.tweet.create({
      data: {
        text: tweet,
        user: {
          connect: {
            id: user?.id,
          },
        },
      },
    });
    res.json({
      ok: true,
      newTweet,
    });
  }
  if (req.method === "GET") {
    const tweets = await db?.tweet.findMany({
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
      orderBy: {
        createdAt: Prisma.SortOrder.desc,
      },
    });

    return res.json({
      tweets,
      ok: true,
    });
  }
}

export default withApiSession(
  withHandler({
    methods: ["POST", "GET"],
    handler,
  })
);

import { NextApiRequest, NextApiResponse } from "next";
import withHandler from "../../../../lib/withHandler";
import { withApiSession } from "../../../../lib/withSession";

export interface ResponseType {
  ok: boolean;
  [key: string]: any;
}

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const {
    session: { user },
    query: { id },
  } = req;

  const alredyExists = await db?.like.findFirst({
    where: {
      userId: user?.id,
      tweetId: +id.toString(),
    },
  });

  if (alredyExists) {
    await db?.like.delete({
      where: {
        id: alredyExists.id,
      },
    });
  } else {
    await db?.like.create({
      data: {
        user: {
          connect: {
            id: user?.id,
          },
        },
        tweet: {
          connect: {
            id: +id.toString(),
          },
        },
      },
    });
  }

  res.json({
    ok: true,
  });
}

export default withApiSession(
  withHandler({
    methods: ["POST"],
    handler,
  })
);

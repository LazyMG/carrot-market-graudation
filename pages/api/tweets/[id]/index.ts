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
    query: { id },
    session: { user },
  } = req;

  const tweet = await db?.tweet.findUnique({
    where: {
      id: +id?.toString()!,
    },
    include: {
      user: {
        select: {
          id: true,
          name: true,
          email: true,
        },
      },
      _count: {
        select: {
          likes: true,
        },
      },
    },
  });

  if (!tweet) {
    return res.status(404).end();
  }

  const isLike = Boolean(
    await db?.like.findFirst({
      where: {
        tweetId: +id?.toString()!,
        userId: user?.id,
      },
      select: {
        id: true,
      },
    })
  );

  res.json({
    ok: true,
    tweet,
    isLike,
  });
}

export default withApiSession(
  withHandler({
    methods: ["GET"],
    handler,
  })
);

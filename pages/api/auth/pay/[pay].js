import { getSession } from "next-auth/client";
import prisma from "../../prisma";

// import { PostSchema } from "../../components/PostForm";

async function pay(req, res) {
  const session = await getSession({ req });

  if (!session) {
    return res.status(401).json({ unauthorized: true });
  }

  const sessionRecord = await prisma.session.findUnique({
    where: { accessToken: session.accessToken },
  });

  const user = await prisma.user.findUnique({
    where: { id: sessionRecord.userId },
  });

  //   const valid = await PostSchema.isValid(req.body);

  //   if (!valid) {
  //     return res.status(500).json({ error: "validation error" });
  //   }
  const post = await prisma.pay.create({
    data: {
      postId: user.id,
      amount: Number(req.body.amount),
    },
  });

  if (post.id) {
    res.status(200).json(post);
  } else {
    return res.status(500).json({ error: "something went wrong" });
  }
}

export default function handler(req, res) {
  if (req.method === "POST") {
    return pay(req, res);
  }
}

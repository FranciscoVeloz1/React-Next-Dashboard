import { getSession } from "next-auth/react";

export default async function getTasks(req, res) {
  const session = await getSession({ req });

  if (session === null) {
    return res.status(401).end();
  }

  res.status(200).json({
    title: "test",
    description: "description test",
  });
}

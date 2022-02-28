import service from "../_services/_auth.services";
import { getSession } from "next-auth/react";

export default async function getCurrentUser(req, res) {
  if (req.method !== "POST") return res.status(401).end();
  //Verificamos si el usuario esta loggeado o no
  const session = await getSession({ req });
  console.log(session, "asdasd")
  if (session === null) return res.status(401).end();

  try {
    const data = await service.getByEmail(req.body);
    const { password, ...user } = data.data;
    res.status(200).json(user);
  } catch (error) {
    return res.status(401).end();
  }
}

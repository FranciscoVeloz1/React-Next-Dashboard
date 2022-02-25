import pool from "../_lib/_db";
import { getSession } from "next-auth/react";

export default async function list(req, res) {
  //Verificamos si el usuario esta loggeado o no
  const session = await getSession({ req });
  if (session === null) {
    return res.status(401).end();
  }

  try {
    switch (req.method) {
      case "GET":
        const tasks = await pool.query("select * from tasks");
        res.status(200).json(tasks);
        break;

      case "POST":
        await pool.query("insert into tasks set ?", [req.body]);
        res.status(200).json({ status: "success" });
    }
  } catch (error) {}
}

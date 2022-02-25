import pool from "../_lib/_db";
import { getSession } from "next-auth/react";

export default async function list(req, res) {
  //Verificamos si el usuario esta loggeado o no
  const session = await getSession({ req });
  if (session === null) {
    return res.status(401).end();
  }

  const { id } = req.query;

  switch (req.method) {
    case "GET":
      const tasks = await pool.query("select * from tasks where id = ?", [id]);
      res.status(200).json(tasks[0]);
      break;

    case "PUT":
      await pool.query("update tasks set ? where id = ?", [req.body, id]);
      res.status(200).json({ status: "success" });
      break;

    case "DELETE":
      await pool.query("delete from tasks where id = ?", [id]);
      res.status(200).json({ status: "success" });
      break;
  }
}

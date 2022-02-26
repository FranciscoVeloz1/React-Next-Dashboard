import pool from "../_lib/_db";
import helpers from "../_lib/_helpers";

const serviceAuth = {};

//Obtenemos un usuario en base al email
serviceAuth.getByEmail = async (payload) => {
  try {
    const validation = helpers.emptyPayload(payload);
    if (validation.status === "error") return validation;
    const data = await pool.query("select * from users where email = ?", [payload.email]);
    return { status: "success", data: data[0] };
  } catch (error) {
    return { status: "error", message: error.message };
  }
};

//Obtenemos un usuario en base al name
serviceAuth.getByName = async (payload) => {
  try {
    const validation = helpers.emptyPayload(payload);
    if (validation.status === "error") return validation;

    const data = await pool.query("select * from users where name = ?", [payload.name]);
    return { status: "success", data: data[0] };
  } catch (error) {
    return { status: "error", message: error.message };
  }
};

//Creamos un nuevo task
serviceAuth.create = async (payload) => {
  try {
    const validation = helpers.emptyPayload(payload);
    if (validation.status === "error") return validation;

    const result = await pool.query("insert into users set ?", [payload]);
    return result.insertId;
  } catch (error) {
    return { status: "error", message: error.message };
  }
};

export default serviceAuth;

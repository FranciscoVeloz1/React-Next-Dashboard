import service from "../_services/_auth.services";
import helpers from "../_lib/_helpers";

const verify = async (req, res) => {
  try {
    //Si el metodo no es post, regresamos error
    if (req.method !== "POST") {
      return res.status(405).end();
    }

    //Verificamos que el email y contraseña no estan vacios
    const user = await service.getByEmail(req.body);
    if (user.status === "error") return res.status(400).json(user);

    //Validamos que exista el usuario
    if (user.data === undefined)
      return res.status(400).json({ status: "error", message: "user not found" });

    //Validamos que las contraseñas coincidan
    const match = await helpers.matchPassword(req.body.password, user.data.password);
    if (!match) return res.status(401).json({ status: "error", message: "Invalid password" });

    return res.status(200).json({ status: "success" });
  } catch (error) {
    res.status(400).json({ status: "error", message: error.message });
  }
};

export default verify;

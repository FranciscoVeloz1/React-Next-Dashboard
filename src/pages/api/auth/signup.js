import service from "../_services/_auth.services";
import helpers from "../_lib/_helpers";

export default async function signUp(req, res) {
  try {
    //Verificamos si el email ya existe
    const emailUser = await service.getByEmail(req.body);
    if (emailUser.data !== undefined)
      return res.status(400).json({ status: "error", message: "email already exist" });

    //Verificamos si el name ya existe
    const userName = await service.getByName(req.body);
    if (userName.data !== undefined)
      return res.status(400).json({ status: "error", message: "user already exist" });

    //Verificamos que no haya campos vacios
    if (userName.status === "error" || emailUser.status === "error")
      return res.status(400).json(emailUser);

    //Creamos el objeto user sin el confirm  
    const newUser = { ...req.body, fk_rol: 1 };
    const { confirm, ...user } = newUser;

    //Encriptamos la contraseña
    user.password = await helpers.encryptPassword(user.password);

    //Creamos el usuario nuevo
    const result = await service.create(user);
    if (result.status === "error") return res.status(400).json(result);

    return res.status(200).json({ status: "success" });
  } catch (error) {
    res.status(404).json({ status: "error", message: error.message });
  }
}

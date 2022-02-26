import service from "../_services/_auth.services";

const credentialsAuth = async (req, res) => {
  try {
    //Si el metodo no es post, regresamos error
    if (req.method !== "POST") {
      return res.status(405).end();
    }

    //Obtenemos el usuario en base al email
    const data = await service.getByEmail(req.body);

    //Creamos el objeto user sin el password
    const { password, ...user } = data.data;
    return res.status(200).json(user);
  } catch (error) {
    res.status(400).json(error);
  }
};

export default credentialsAuth;

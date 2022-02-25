import { toast } from "react-toastify";

const credentialsAuth = (req, res) => {
  try {
    //Si el metodo no es post, regresamos error
    if (req.method !== "POST") {
      return res.status(405).end();
    }

    //Validamos credenciales
    if (req.body.password === "12345678") {
      const templateUser = {
        name: "Default",
        email: "default@email.com",
      };

      return res.status(200).json(templateUser);
    }

    return res.status(401).end();
  } catch (error) {
    res.status(400).json(error);
  }
};

export default credentialsAuth;

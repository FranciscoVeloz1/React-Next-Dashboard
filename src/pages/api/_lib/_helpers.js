const bcrypt = require("bcryptjs");
const helpers = {};

//Encriptamos la contraseña
helpers.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  return hash;
};

//Confirmamos que las contraseñas coincidan
helpers.matchPassword = async (password, savedPassword) => {
  try {
    return await bcrypt.compare(password, savedPassword);
  } catch (error) {
    console.log(error);
  }
};

//Verificamos que no haya campos vacios
helpers.emptyPayload = (payload) => {
  const object = Object.values(payload);
  for (const o of object) {
    if (o === null || o === undefined || o === "") {
      return { status: "error", message: "You left an empty field" };
    }
  }

  return { status: "success" };
};

export default helpers;

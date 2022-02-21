import Input from "@common/Input";
import Swal from "sweetalert2";
import { useContext, useState } from "react";
import { Button } from "react-bootstrap";

const SignInForm = () => {
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPass, setErrorPass] = useState(false);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  //Save data when input change
  const handleChange = (name, value) => setUserData({ ...userData, [name]: value });

  //Email input handle
  const handleEmail = (e) => {
    setErrorEmail(false);
    handleChange("email", e.target.value);
  };

  //Password input handle
  const handlePass = (e) => {
    setErrorPass(false);
    handleChange("password", e.target.value);
  };

  //Handle to submit the info
  const handleSubmit = async (e) => {
    e.preventDefault();

    // const result = await auth.login(userData);

    // if (result.error === "Usuario no encontrado") return setErrorEmail(true);
    // if (result.error === "Contraseña incorrecta") return setErrorPass(true);
    // if (result.login === "failed")
    //   return Swal.fire({
    //     icon: "error",
    //     title: "Oops",
    //     text: "Something went wrong!",
    //     confirmButtonColor: "#ee2c2c",
    //   });

    // login(result);

    console.log(userData);
  };

  const emailOpt = {
    type: "text",
    text: "Email",
    id: "email",
    styles: "bg-light",
    onChange: handleEmail,
    value: userData.email,
  };

  const passOpt = {
    type: "password",
    text: "Password",
    id: "password",
    styles: "bg-light",
    onChange: handlePass,
    value: userData.password,
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <Input o={emailOpt} />
      </div>

      <div className="mb-3">
        <Input o={passOpt} />
      </div>

      <div className="d-grid gap-2">
        <Button type="submit">Sign in</Button>
      </div>
    </form>
  );
};

export default SignInForm;

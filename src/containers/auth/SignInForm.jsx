import Input from "@common/Input";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { useRouter } from "next/router";
import { useAuth } from "@hooks/useAuth";
import { serviceAuth } from "@services/index.services";

const SignInForm = () => {
  const router = useRouter();
  const { signIn } = useAuth();
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

    // const result = await serviceAuth.signIn(userData);
    // if (result.error === "Usuario no encontrado") return setErrorEmail(true);
    // if (result.error === "Contraseña incorrecta") return setErrorPass(true);
    // if (result.status === "error")
    //   return Swal.fire({
    //     icon: "error",
    //     title: "Oops",
    //     text: "Something went wrong! " + result.error,
    //     confirmButtonColor: "#ee2c2c",
    //   });

    signIn(userData);
    router.push("/");
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
        {errorEmail ? (
          <p className="form-error mt-1">
            <FontAwesomeIcon icon={faExclamationCircle} className="me-1" />
            Email not found
          </p>
        ) : null}
      </div>

      <div className="mb-3">
        <Input o={passOpt} />
        {errorPass ? (
          <p className="form-error mt-1">
            <FontAwesomeIcon icon={faExclamationCircle} className="me-1" />
            Incorrect password
          </p>
        ) : null}
      </div>

      <div className="d-grid gap-2">
        <Button type="submit">Sign in</Button>
      </div>
    </form>
  );
};

export default SignInForm;

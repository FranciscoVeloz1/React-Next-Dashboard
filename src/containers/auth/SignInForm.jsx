import Input from "@common/Input";
import Swal from "sweetalert2";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { signIn } from "next-auth/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";

//Importing services
import { serviceAuth } from "@services/index.services";

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

    const result = await serviceAuth.signIn(userData);

    if (result.status === "error") {
      switch (result.message) {
        case "user not found":
          setErrorEmail(true);
          return;

        case "Invalid password":
          setErrorPass(true);
          return;

        default:
          Swal.fire(result.message);
          return;
      }
    }

    signIn("templateLogin", {
      email: userData.email,
      callbackUrl: "/",
    });
  };

  const emailOpt = {
    type: "email",
    name: "email",
    text: "Email",
    id: "email",
    styles: "bg-light",
    labelStyle: "bg-light",
    onChange: handleEmail,
    value: userData.email,
  };

  const passOpt = {
    type: "password",
    name: "password",
    text: "Password",
    id: "password",
    styles: "bg-light",
    labelStyle: "bg-light",
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

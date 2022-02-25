import Input from "@common/Input";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { signIn } from "next-auth/react";

const SignInForm = ({ csrfToken }) => {
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

    // try {
    //   const res = await fetch(`http://localhost:3000/api/auth/template`, {
    //     method: "POST",
    //     body: JSON.stringify(userData),
    //     headers: { "Content-Type": "application/json" },
    //   });
    //   const user = await res.json();

    //   if (user) {
    //     console.log(user)
    //     return user;
    //   } else {
    //     return null;
    //   }
    // } catch (error) {
    //   console.log(error);
    //   return null;
    // }

    const result = signIn("credentials", {
      redirect: false,
      email: userData.email,
      password: userData.password,
    });

    console.log(result)
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
    // <form method="post" action="/api/auth/callback/credentials">
    <form onSubmit={handleSubmit}>
      <input name="csrfToken" type="hidden" defaultValue={csrfToken} />

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

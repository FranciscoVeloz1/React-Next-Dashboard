import Input from "@common/Input";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import { Button, Row, Col } from "react-bootstrap";
import { useRouter } from "next/router";
import { serviceAuth } from "@services/index.services";
import { signIn } from "next-auth/react";

const SignUpForm = () => {
  const router = useRouter();
  const [errorUser, setErrorUser] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassLength, setErrorPassLength] = useState(false);
  const [errorSamePass, setErrorSamePass] = useState(false);
  const [userData, setUserData] = useState({
    name: "",
    fullname: "",
    email: "",
    password: "",
    confirm: "",
    image: "",
    fk_rol: 1,
  });

  //Save data when input change
  const handleChange = (name, value) => setUserData({ ...userData, [name]: value });

  //Handle inputs
  const handleUser = (e) => {
    handleChange("name", e.target.value);
    setErrorUser(false);
  };

  const handleEmail = (e) => {
    handleChange("email", e.target.value);
    setErrorEmail(false);
  };

  const handlePassword = (e) => {
    handleChange("password", e.target.value);
    setErrorPassLength(false);
    setErrorSamePass(false);
  };

  const handleConfirm = (e) => {
    handleChange("confirm", e.target.value);
    setErrorPassLength(false);
    setErrorSamePass(false);
  };

  //Handle to submit the info
  const handleSubmit = async (e) => {
    e.preventDefault();

    const newUser = { ...userData, image: `https://ui-avatars.com/api/?name=${userData.name}` };

    if (newUser.password.length < 8) {
      return setErrorPassLength(true);
    }

    if (newUser.password !== userData.confirm) {
      return setErrorSamePass(true);
    }

    const result = await serviceAuth.signUp(newUser);
    if (result.status === "error")
      switch (result.message) {
        case "email already exist":
          setErrorEmail(true);
          return;

        case "user already exist":
          setErrorUser(true);
          return;

        default:
          return Swal.fire({
            icon: "error",
            title: "Oops",
            text: "Something went wrong! - " + result.message,
            confirmButtonColor: "#ee2c2c",
          });
      }

    signIn("templateLogin", {
      email: newUser.email,
      callbackUrl: "/",
    });
  };

  const inputOpt = [
    {
      type: "text",
      text: "User",
      id: "user",
      styles: "bg-light",
      labelStyle: "bg-light",
      onChange: handleUser,
      value: userData.user,
    },
    {
      type: "text",
      text: "Fullname",
      id: "fullname",
      styles: "bg-light",
      labelStyle: "bg-light",
      onChange: (e) => handleChange("fullname", e.target.value),
      value: userData.fullname,
    },
    {
      type: "email",
      text: "Email",
      id: "email",
      styles: "bg-light",
      labelStyle: "bg-light",
      onChange: handleEmail,
      value: userData.email,
    },
    {
      type: "password",
      text: "Password",
      id: "password",
      styles: "bg-light",
      labelStyle: "bg-light",
      onChange: handlePassword,
      value: userData.password,
    },
    {
      type: "password",
      text: "Confirm password",
      id: "confirm",
      styles: "bg-light",
      labelStyle: "bg-light",
      onChange: handleConfirm,
      value: userData.confirm,
    },
  ];

  return (
    <form onSubmit={handleSubmit}>
      <Row>
        <Col lg={6} sm={12}>
          <div className="mb-3">
            <Input o={inputOpt[0]} />
            {errorUser ? (
              <p className="form-error mt-1">
                <FontAwesomeIcon icon={faExclamationCircle} className="me-1" />
                User already exist
              </p>
            ) : null}
          </div>
        </Col>

        <Col lg={6} sm={12}>
          <div className="mb-3">
            <Input o={inputOpt[1]} />
          </div>
        </Col>
      </Row>

      <div className="mb-3">
        <Input o={inputOpt[2]} />
        {errorEmail ? (
          <p className="form-error mt-1">
            <FontAwesomeIcon icon={faExclamationCircle} className="me-1" />
            Email already exist
          </p>
        ) : null}
      </div>

      <div className="mb-3">
        <Input o={inputOpt[3]} />
        {errorPassLength ? (
          <p className="form-error mt-1">
            <FontAwesomeIcon icon={faExclamationCircle} className="me-1" />
            The minimum size must be 8
          </p>
        ) : null}
      </div>

      <div className="mb-3">
        <Input o={inputOpt[4]} />
        {errorSamePass ? (
          <p className="form-error mt-1">
            <FontAwesomeIcon icon={faExclamationCircle} className="me-1" />
            Passwords don't match
          </p>
        ) : null}
      </div>

      <div className="d-grid gap-2">
        <Button type="submit">Sign up</Button>
      </div>
    </form>
  );
};

export default SignUpForm;

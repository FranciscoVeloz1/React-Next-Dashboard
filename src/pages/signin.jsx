import SignInForm from "@containers/auth/SignInForm";
import { Container, Row, Col, FormControl, Button } from "react-bootstrap";

export default function signin() {
  const img =
    "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";

  return (
    <Container className="mt-md-5">
      <Row>
        <Col lg={8} md={10} className="mx-auto">
          <Row className="shadow-lg">
            <Col lg={6} md={6} className="p-0 d-md-block d-none">
              <img src={img} alt="login" className="img-signin" />
            </Col>

            <Col lg={6} md={6} className="mx-auto py-5 px-4">
              <p className="title mb-4">Sign in</p>
              <SignInForm />

              <div className="mt-4 mb-4">
                <a href="/forgot" className="btn-link text-sm">
                  Forgot password?
                </a>
              </div>

              <hr />

              <div className="mt-4 text-center text-sm">
                Don't have account?
                <a href="/signup" className="ms-1 btn-link">
                  Sign up
                </a>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

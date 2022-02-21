import { Container, Row, Col, FormControl, Button } from "react-bootstrap";

export default function signin() {
  const img = "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";

  return (
    <Container className="mt-5">
      <Row>
        <Col lg={8} className="mx-auto">
          <Row className="shadow-lg">
            <Col lg={6} className="p-0">
              <img src={img} alt="login" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </Col>

            <Col lg={6} className="mx-auto py-5 px-4">
              <p>Sign in</p>
              <form>
                <div className="mb-3">
                  <FormControl type="email" placeholder="Email" />
                </div>

                <div className="mb-3">
                  <FormControl type="password" placeholder="Password" />
                </div>

                <div className="d-grid gap-2">
                  <Button>Sign in</Button>
                </div>
              </form>

              <div className="mt-4 mb-5">
                <a href="/forgot" className="btn-link">Forgot password?</a>
              </div>

              <hr />

              <div className="mt-5 text-center">
                Don't have account?
                <a href="/signup" className="ms-1 btn-link">Sign up</a>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

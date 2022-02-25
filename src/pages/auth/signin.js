import Link from "next/link";
import SignInForm from "@containers/auth/SignInForm";
import { Container, Row, Col, FormControl, Button } from "react-bootstrap";
import { getProviders, signIn, getSession, getCsrfToken } from "next-auth/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function signin({ providers, csrfToken }) {
  const { github } = providers;

  const img =
    "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";

  const gitLogo = "https://cdn-icons-png.flaticon.com/512/25/25231.png";

  return (
    <Container className="mt-md-5 mb-5">
      <Row>
        <Col lg={8} md={10} className="mx-auto">
          <Row className="shadow-lg">
            <Col lg={6} md={6} className="p-0 d-md-block d-none">
              <img src={img} alt="login" className="img-signin" />
            </Col>

            <Col lg={6} md={6} className="mx-auto py-5 px-4">
              <p className="title mb-4">Sign in</p>
              <SignInForm csrfToken={csrfToken} />

              <div className="mt-4 mb-4 text-center">
                <a href="/forgot" className="btn-link text-sm">
                  Forgot password?
                </a>
              </div>

              <hr />

              <div className="text-center py-1">
                <button className="btn btn-outline-secondary" onClick={() => signIn(github.id)}>
                  <img src={gitLogo} className="brand-icon me-1 py-auto" />
                  Sign in with {github.name}
                </button>
              </div>

              <div className="mt-4 text-center text-sm">
                Don't have account?
                <Link href="/signup">
                  <a className="ms-1 btn-link">Sign up</a>
                </Link>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  const providers = await getProviders();

  if (session !== null) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { session, providers, csrfToken: await getCsrfToken(context) },
  };
}

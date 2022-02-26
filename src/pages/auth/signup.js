import Link from "next/link";
import SignUpForm from "@containers/auth/SignUpForm";
import { Container, Row, Col, FormControl, Button } from "react-bootstrap";
import { getSession } from "next-auth/react";

export default function signup() {
  const img =
    "https://images.pexels.com/photos/4974912/pexels-photo-4974912.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";

  return (
    <Container className="mt-md-5 mb-5">
      <Row>
        <Col lg={8} md={10} className="mx-auto">
          <Row className="shadow-lg no-shadow">
            <Col lg={6} md={6} className="p-0 d-md-block d-none">
              <img src={img} alt="login" className="img-signin" />
            </Col>

            <Col lg={6} md={6} className="mx-auto py-5 px-4">
              <p className="title mb-4">Sign up</p>
              <SignUpForm />

              <hr className="mt-4" />

              <div className="mt-4 text-center text-sm">
                Do you have an account?
                <Link href="/auth/signin">
                  <a className="ms-1 btn-link">Sign in</a>
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

  if (session !== null) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}

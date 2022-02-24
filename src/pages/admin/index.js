import AdminLayout from "@containers/AdminLayout";
import { Container, Row, Col } from "react-bootstrap";
import { getSession } from "next-auth/react";

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  if (session === null) {
    return {
      redirect: {
        destination: "/api/auth/signin",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
};

const index = () => {
  return (
    <Container fluid className="mt-5">
      <Row>
        <p className="title mb-2">Dashboard</p>

        <Col className="bg-light py-3 border-radius">
          <p>Welcome to the dashboard</p>
        </Col>
      </Row>
    </Container>
  );
};

index.Layout = AdminLayout;

export default index;

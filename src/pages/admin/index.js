import AdminLayout from "@containers/AdminLayout";
import useFetch from "@hooks/useFetch";
import { Container, Row, Col } from "react-bootstrap";
import { getSession } from "next-auth/react";
import { serviceSession } from "@services/index.services";

export const getServerSideProps = async (context) => {
  const session = await getSession(context);
  const data = await serviceSession.getCurrent(session.user);
  console.log(data);

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

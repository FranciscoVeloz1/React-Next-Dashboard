import AdminLayout from "@containers/AdminLayout";
import { Container, Row, Col } from "react-bootstrap";

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

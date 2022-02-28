import useFetch from "@hooks/useFetch";
import styles from "@styles/pages/Profile.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import { getSession, useSession } from "next-auth/react";
import { serviceSession } from "@services/index.services";

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

export default function profile() {
  const { data: session, status } = useSession();
  const { data } = useFetch(serviceSession.getCurrent, session.user);

  if (status === "loading") return null;

  return (
    <Container className="my-5">
      <Row>
        <Col lg="4" md="6" className="mx-auto">
          <div className="shadow-lg border-radius">
            <div className="card-body text-center">
              <img
                src={session.user.image}
                className={`${styles.profile_image} border-radius mb-4`}
                onClick={() => console.log(data)}
              />
              <p className="text-sm text-secondary txt-bold py-2">
                User: <span className="text-lg text-dark txt-normal">{session.user.name}</span>
              </p>
              <p className="text-sm text-secondary txt-bold py-2">
                Email: <span className="text-lg text-dark txt-normal">{session.user.email}</span>
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

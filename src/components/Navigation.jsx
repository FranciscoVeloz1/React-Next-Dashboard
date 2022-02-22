import { Navbar, Container, Nav, Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUser, faSignOut } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import { useAuth } from "@hooks/useAuth";

const Navigation = ({ setToggle, toggle }) => {
  const { user, signOut } = useAuth();
  const router = useRouter();

  //Sign out
  const handleSignOut = () => {
    signOut();
    router.push("/");
  };

  return (
    <Navbar bg="light" variant="light" className="border-radius">
      <Container fluid>
        <Navbar.Brand onClick={() => setToggle(!toggle)} className="txt-lg btn text-primary">
          <FontAwesomeIcon icon={faBars} />
        </Navbar.Brand>
        <Nav className="ms-auto">
          <Dropdown drop="start">
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
              Francisco
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="/profile" className="mt-2">
                <FontAwesomeIcon icon={faUser} className="me-2 text-secondary" />
                Profile
              </Dropdown.Item>
              <hr />
              <Dropdown.Item className="mb-2" onClick={handleSignOut}>
                <FontAwesomeIcon icon={faSignOut} className="me-2 text-secondary" />
                Sign out
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;

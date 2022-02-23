import Link from "next/link";
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
      <Container fluid className="flex-lg-row flex-row-reverse">
        <Navbar.Brand onClick={() => setToggle(!toggle)} className="btn">
          <FontAwesomeIcon icon={faBars} className="txt-primary txt-bold txt-lg" />
        </Navbar.Brand>

        <Nav className="ms-auto">
          <Dropdown drop="start" className="d-lg-block d-none">
            <Dropdown.Toggle variant="outline-light" className="button-primary" id="dropdown-basic">
              Francisco
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="/profile" className="mt-2">
                <FontAwesomeIcon icon={faUser} className="me-2 txt-secondary" />
                Profile
              </Dropdown.Item>
              <hr />
              <Dropdown.Item className="mb-2" onClick={handleSignOut}>
                <FontAwesomeIcon icon={faSignOut} className="me-2 txt-secondary" />
                Sign out
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>

        <Nav className="me-auto d-lg-none d-block">
          <Dropdown drop="end">
            <Dropdown.Toggle variant="outline-light" className="button-primary" id="dropdown-basic">
              Francisco
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="/profile" className="mt-2">
                <FontAwesomeIcon icon={faUser} className="me-2 txt-secondary" />
                Profile
              </Dropdown.Item>
              <hr />
              <Dropdown.Item className="mb-2" onClick={handleSignOut}>
                <FontAwesomeIcon icon={faSignOut} className="me-2 txt-secondary" />
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

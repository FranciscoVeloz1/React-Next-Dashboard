import Link from "next/link";
import { useRouter } from "next/router";
import { useAuth } from "@hooks/useAuth";
import { Navbar, Container, Nav, NavDropdown, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const GlobalNav = () => {
  const { user, signOut } = useAuth();
  const router = useRouter();

  //Sign out
  const handleSignOut = () => {
    signOut();
    router.push("/");
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand>
          <Link href="/">
            <a className="text-white">
              <FontAwesomeIcon icon={faHome} className="me-2" />
              Template
            </a>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {user ? (
            <Nav className="ms-auto">
              <Link href="/profile">
                <a className="nav-link">Profile</a>
              </Link>
              <button className="m-0 nav-link bg-dark" onClick={handleSignOut}>
                Sign out
              </button>
            </Nav>
          ) : (
            <Nav className="ms-auto">
              <Link href="/signin">
                <a className="nav-link">Sign in</a>
              </Link>
              <Link href="/signup">
                <a className="nav-link">Sign up</a>
              </Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default GlobalNav;

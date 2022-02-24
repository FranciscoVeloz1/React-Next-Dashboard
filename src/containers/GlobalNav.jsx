import Link from "next/link";
import { useRouter } from "next/router";
import { useAuth } from "@hooks/useAuth";
import { Navbar, Container, Nav, NavDropdown, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { signIn, signOut, useSession } from "next-auth/react";

//Sign in and sign out
const SigninSignout = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return null;
  }

  if (session) {
    return (
      <>
        <p className="nav-link">{session.user?.name}</p>
        <Link href="/profile">
          <a className="nav-link">Profile</a>
        </Link>

        <button className="nav-link bg-dark text-start" onClick={() => signOut()}>
          Sign out
        </button>
      </>
    );
  }

  return (
    <>
      <button onClick={() => signIn()} className="nav-link bg-dark text-start">
        Sign In
      </button>
      <Link href="/signup">
        <a className="nav-link bg-dark">Sign up</a>
      </Link>
    </>
  );
};

const GlobalNav = () => {
  const { user } = useAuth();
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
          <Nav className="ms-auto">
            <SigninSignout />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default GlobalNav;

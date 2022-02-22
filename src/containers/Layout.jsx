import Sidebar from "./Sidebar";
import GlobalNav from "@components/GlobalNav";
import Navigation from "@components/Navigation";
import { ToastContainer } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useAuth } from "@hooks/useAuth";
import styles from "@styles/containers/Layout.module.scss";

const Layout = ({ children }) => {
  const { user } = useAuth();
  const [toggle, setToggle] = useState(false);

  if (user !== null) {
    return (
      <div className={`${styles.main_container}`}>
        <Sidebar toggle={toggle} />

        <div
          className={toggle ? `${styles.main_content} ${styles.active}` : styles.main_content}
          onClick={() => (toggle ? setToggle(!toggle) : null)}
        >
          <Navigation setToggle={setToggle} toggle={toggle} />
          {children}
        </div>

        <ToastContainer />
      </div>
    );
  } else {
    return (
      <>
        <GlobalNav />
        {children}
      </>
    );
  }
};

export default Layout;

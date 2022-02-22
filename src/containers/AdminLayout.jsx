import Sidebar from "./Sidebar";
import Navigation from "@components/Navigation";
import { ToastContainer } from "react-bootstrap";
import { useState, useEffect } from "react";
import styles from "@styles/containers/Layout.module.scss";

const AdminLayout = ({ children }) => {
  const [toggle, setToggle] = useState(false);

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
};

export default AdminLayout;

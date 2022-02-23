import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt, faFile, faHome } from "@fortawesome/free-solid-svg-icons";

//Importing styles and assets
import styles from "@styles/containers/Sidebar.module.scss";

const Sidebar = ({ toggle }) => {
  return (
    <div className={toggle ? `${styles.Sidebar} ${styles.active}` : styles.Sidebar}>
      <div className={styles.sidebar_header}>
        <Link href="/admin">
          <a>
            <FontAwesomeIcon icon={faHome} className={`me-2 txt-primary`} />
            Dashboard
          </a>
        </Link>
      </div>

      <div className={styles.sidebar_content}>
        <ul>
          <p className={styles.sidebar_subtitle}>Menu</p>
          <li>
            <Link href="/template">
              <a>
                <FontAwesomeIcon icon={faFileAlt} className={`me-2 ${styles.sidebar_icon}`} />
                Template
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

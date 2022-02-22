import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";

//Importing styles and assets
import styles from "@styles/components/Sidebar.module.scss";

const Sidebar = ({ toggle }) => {
  return (
    <div className={toggle ? `${styles.Sidebar} ${styles.active}` : styles.Sidebar}>
      <div className={`${styles.sidebar_header}`}>
        <a href="/admin">Template</a>
      </div>

      <div className={`${styles.sidebar_content}`}>
        <p>Menu</p>
        <ul>
          <li>
            <a href="/experience">
              <FontAwesomeIcon icon={faLaptopCode} className="me-1" />
              Experience
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

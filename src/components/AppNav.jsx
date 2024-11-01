import { Link } from "react-router-dom";
import styles from "./AppNav.module.css";

function AppNav() {
  return (
    <div>
      <nav className={styles.nav}>
        <Link to="applayout">AppLayout</Link>
      </nav>
      <div style={{ color: "black", fontSize: "20px" }}>App navigation</div>
    </div>
  );
}

export default AppNav;

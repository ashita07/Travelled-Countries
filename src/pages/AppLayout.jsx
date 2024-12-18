import SideBar from "../components/SideBar";
import styles from "./AppLayout.module.css";
import Map from "../components/Map";

function AppLayout() {
  return (
    <div className={styles.appLayout}>
      <SideBar />
      <Map />
    </div>
  );
}

export default AppLayout;

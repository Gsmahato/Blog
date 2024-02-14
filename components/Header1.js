import React from "react";
import styles from "@/styles/Home.module.css";

const Header1 = () => {
  return (
    <div className={styles.sub_container}>
      <div className={styles.container}>
        <div className={styles.logo_row}>
          <h3 className={styles.site_logo1}>This is me</h3>
          <h1 className={styles.site_logo}>Gurusharan Mahato</h1>
        </div>
      </div>
    </div>
  );
};

export default Header1;

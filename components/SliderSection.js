import React from "react";
import styles from "@/styles/Home.module.css";

const SliderSection = () => {
  return (
    <>
      <section className={styles.site_section}>
        <div className={styles.container}>
          <div className={styles.site_row}>
            <div className={styles.site_col}>
              <div className={styles.site_outer}></div>
              <div className={styles.site_slider}></div>
              <div className={styles.site_dots}></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SliderSection;

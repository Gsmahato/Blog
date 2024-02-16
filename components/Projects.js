import React from "react";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

const Projects = () => {
  return (
    <div className={styles.service_container}>
      <div className={styles.container}>
        <div className={styles.service_title}>
          <div className={styles.project_content}>
            <h1 className={styles.service_title_text}>Our Latest Featured Projects</h1>
            <p className={styles.service_paragraph}>
            Who are in extremely love with eco friendly system.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

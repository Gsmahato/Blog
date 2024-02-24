import React from "react";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import image from "../public/image2.jpg";

const Projects = ({ projects }) => {
  return (
    <div className={styles.service_container}>
      <div className={styles.container}>
        <div className={styles.service_title}>
          <div className={styles.project_content}>
            <h1 className={styles.service_title_text}>
              Our Latest Featured Projects
            </h1>
            <p className={styles.service_paragraph}>
              Who are in extremely love with eco friendly system.
            </p>
          </div>
        </div>
        <div className={styles.featuredProjects}>
          <div className={styles.projectsContainer}>
            {projects.map((project, index) => (
              <div key={index} className={styles.projectCard}>
                <Image
                  src={image}
                  alt={project.title}
                  width={300}
                  height={200}
                />
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

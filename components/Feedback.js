import React from "react";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import image from "../public/ganesha.jpeg";
import CardHome from "./CardHome";

const Feedback = () => {
  return (
    <div className={styles.service_container}>
      <div className={styles.container}>
        <div className={styles.service_title}>
          <div className={styles.project_content}>
            <h1 className={styles.service_title_text}>
              Client's Feedback About Me
            </h1>
            <p className={styles.service_paragraph}>
              It is very easy to start smoking but it is an uphill task to quit
              it. Ask any chain smoker or even a person.
            </p>
          </div>
        </div>
        <div className={styles.F_slide}><CardHome/></div>
        
        {/* {data.map((d) => (
          <div className={styles.feedback_items}>
            <div className={styles.single_testomonial_item}>
              <div className={styles.feedback_person}>
                <Image src={image} width={35} height={35} />
              </div>
              <div className={styles.feedback_desc}>
                <p>{d.description}</p>
                <h4>John Cena</h4>
                <p>{d.position}</p>
              </div>
            </div>
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default Feedback;

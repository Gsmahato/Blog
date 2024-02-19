import React from "react";
import styles from "@/styles/Home.module.css";
import image from "../public/ganesha.jpeg";
import Image from "next/image";

const CardHome = ({data}) => {

  return (
    <>
        <div className={styles.feedback_items}>
          <div className={styles.single_testomonial_item}>
            <div className={styles.feedback_person}>
              <Image src={image} width={35} height={35} />
            </div>
            <div className={styles.feedback_desc}>
              <p>{data.feedback}</p>
              <h4>{data.name}</h4>
              <p>{data.position}</p>
            </div>
          </div>
        </div>
    </>
  );
};

export default CardHome;

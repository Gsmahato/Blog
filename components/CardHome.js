import React from "react";
import styles from "@/styles/Home.module.css";
import image from "../public/ganesha.jpeg";
import Image from "next/image";

const CardHome = () => {
  const data = [
    {
      name: "Amir",
      position: "CEO at Facebook",
      image: "",
      feedback: "abcxyz",
    },
    {
      name: "Amir",
      position: "CEO at Facebook",
      image: "",
      feedback: "abcxyz",
    },
    {
      name: "Amir",
      position: "CEO at Facebook",
      image: "",
      feedback: "abcxyz",
    },
    {
      name: "Amir",
      position: "CEO at Facebook",
      image: "",
      feedback: "abcxyz",
    },
  ];
  return (
    <>
      {data.map((d, index) => (
        <div key={index} className={styles.feedback_items}>
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
      ))}
    </>
  );
};

export default CardHome;

import React, { useState, useEffect } from "react";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import image from "../public/ganesha.jpeg";
import CardHome from "./CardHome";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";

const Feedback = () => {
  const data = [
    {
      name: "Amir",
      position: "CEO at Facebook",
      image: "",
      feedback:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, molestias ratione accusamus omnis quae, nemo dignissimos animi ea repellat ex inventore nostrum perspiciatis! Velit commodi atque reprehenderit esse numquam quas?",
    },
    {
      name: "Roshan",
      position: "CEO at Facebook",
      image: "",
      feedback: "abcxyz",
    },
    {
      name: "Aayush",
      position: "CEO at Facebook",
      image: "",
      feedback: "abcxyz",
    },
    {
      name: "Divyansh",
      position: "CEO at Facebook",
      image: "",
      feedback: "abcxyz",
    },
  ];

  const [currentCard, setCurrentCard] = useState(0);

  const handleNext = () => {
    setCurrentCard((prevCard) =>
      prevCard + 1 >= data.length ? 0 : prevCard + 1
    );
  };

  const handlePrev = () => {
    setCurrentCard((prevCard) =>
      prevCard - 1 < 0 ? data.length - 2 : prevCard - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000); // Change the interval (in milliseconds) according to your preference

    return () => clearInterval(interval);
  }, [currentCard]);

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
        <div className={styles.F_slide}>
          <div className={styles.cardsWrapper}>
            {data.map((_, index) => (
              <CardHome
                key={index}
                data={data[(currentCard + index) % data.length]}
              />
            ))}
          </div>
          <div className={styles.sliderbtn}>
            <button className={styles.sliderbtnpre} onClick={handlePrev}>
              <MdNavigateBefore />
            </button>
            <button className={styles.sliderbtnnxt} onClick={handleNext}>
              <MdNavigateNext />
            </button>
          </div>
        </div>

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

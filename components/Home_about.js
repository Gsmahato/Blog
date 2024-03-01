import React from "react";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import image from "../public/8.png";
import Link from "next/link";

const Homeabout = () => {
  function truncateContent(content, maxWords) {
    if (typeof content !== "string") {
      return "";
    }
  
    const words = content.trim().split(" ");
    const truncated = words.slice(0, maxWords).join(" ");
    return truncated + (words.length > maxWords ? "..." : "");
  }
  const content = "Welcome to my digital realm! I'm a passionate and versatile individual with a keen interest in shaping the digital landscape. As a self-taught web developer, graphic designer, and mobile app enthusiast, I've embarked on a thrilling journey of continuous learning and growth. What sets me apart is not just my technical prowess, but the relentless self-motivation that drives me to explore new horizons in the ever-evolving world of technology. Whether crafting visually stunning designs, architecting responsive and dynamic websites, or delving into the intricacies of mobile app development, I thrive on the challenge of turning creative visions into functional, user-centric experiences. With a strong foundation built on curiosity and dedication, I am committed to pushing boundaries and creating innovative solutions that leave a lasting impression.";
  return (
    <>
      <div className={styles.about_container}>
        <div className={styles.container}>
          <div className={styles.about_row}>
            <div className={styles.about_left}>
              <Image src={image} width={500} height={500} />
            </div>
            <div className={styles.about_right}>
              <h6 className={styles.about_right_h6}>about me</h6>
              <h1 className={styles.about_right_h1}>personal details</h1>
              <p>{truncateContent(content, 60)}</p>
              <Link className={styles.about_right_btn} href="/aboutme">view full details</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homeabout;

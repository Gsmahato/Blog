import React from "react";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import image from "../public/R.png";
import Link from "next/link";

const Homeabout = () => {
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
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Laudantium accusamus pariatur dolor nihil ducimus atque, harum
                dolores soluta, sapiente facere animi omnis ullam nesciunt
                suscipit modi, necessitatibus corrupti aperiam totam.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex eligendi sapiente vitae, quae pariatur rem atque tenetur, incidunt 
              </p>
              <Link className={styles.about_right_btn} href="/aboutme">view full details</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homeabout;

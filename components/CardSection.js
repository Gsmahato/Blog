import React from "react";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import ganesha from "../public/ganesha.jpeg";
import image1 from "../public/image1.jpeg";

const CardSection = () => {
  return (
    <>
      <div className={styles.card_section}>
        <div className={styles.container}>
          <div className={styles.row_space}>
            <div className={styles.col_space}>
              <Link href="/">
                <Image src={ganesha} width={350} height={400} alt="ganesh" />
              </Link>
            </div>
            <div className={styles.col_space}>
              <Link href="/">
                <Image src={image1} width={350} height={400} />
              </Link>
            </div>
            <div className={styles.col_space}>
            <Link href="/">
                <Image src={image1} width={350} height={400} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardSection;

import React from "react";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import ganesha from "../public/ganesha.jpeg";
import image1 from "../public/image1.jpeg";
import image2 from "../public/image2.jpg";

const CardForBlog = () => {
  return (
    <>
      <div className={styles.row_space}>
        <div className={styles.col_space}>
          <Link href="/">
            <Image src={ganesha} width={350} height={400} alt="ganesh" />
            <div className={styles.overlays1}></div>
            <div className={styles.half_text1}>
              <div className={styles.post_meta1}>
                <span className={styles.post_category1}>Category</span>
                <span className={styles.post_date1}>2023/10/4</span>
              </div>
              <h3>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non
                harum ad animi voluptas quia ea quisquam fuga maxime facere
                ullam, expedita aspernatur corrupti? Inventore alias nobis omnis
                distinctio laborum architecto!
              </h3>
            </div>
          </Link>
        </div>
        <div className={styles.col_space}>
          <Link href="/">
            <Image src={image1} width={350} height={400} alt="ganesh" />
            <div className={styles.overlays1}></div>
            <div className={styles.half_text1}>
              <div className={styles.post_meta1}>
                <span className={styles.post_category1}>Category</span>
                <span className={styles.post_date1}>2023/10/4</span>
              </div>
              <h3>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non
                harum ad animi voluptas quia ea quisquam fuga maxime facere
                ullam, expedita aspernatur corrupti? Inventore alias nobis omnis
                distinctio laborum architecto!
              </h3>
            </div>
          </Link>
        </div>
        <div className={styles.col_space}>
          <Link href="/">
            <Image src={image2} width={350} height={400} alt="ganesh" />
            <div className={styles.overlays1}></div>
            <div className={styles.half_text1}>
              <div className={styles.post_meta1}>
                <span className={styles.post_category1}>Category</span>
                <span className={styles.post_date1}>2023/10/4</span>
              </div>
              <h3>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non
                harum ad animi voluptas quia ea quisquam fuga maxime facere
                ullam, expedita aspernatur corrupti? Inventore alias nobis omnis
                distinctio laborum architecto!
              </h3>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default CardForBlog;

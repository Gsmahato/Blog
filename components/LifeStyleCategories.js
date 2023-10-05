import React from "react";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import ganesha from "../public/ganesha.jpeg";
import image1 from "../public/image1.jpeg";
import image2 from "../public/image2.jpg";
import image3 from "../public/image3.jpg";
import image4 from "../public/image4.jpg";

const LifeStyleCategories = () => {
  return (
    <>
      <div className={styles.category_section}>
        <div className={styles.container}>
          <div className={styles.headlines}>
            <div className={styles.headlines_name}>
              <h2>Lifestyle Category</h2>
            </div>
          </div>
          <div className={styles.blog_enteries}>
            <div className={styles.left_col}>
              <div className={styles.left_row}>
                <div className={styles.left_card}>
                  <Link href="/">
                    <Image src={image1} width={350} height={234} alt="" />
                    <div className={styles.blog_content_body}>
                      <div className={styles.half_text2}>
                        <div className={styles.post_meta2}>
                          <span className={styles.post_category2}>
                            Category
                          </span>
                          <span className={styles.post_date2}>2023/10/4</span>
                        </div>
                        <h2>
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit.
                        </h2>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className={styles.left_card}>
                  <Link href="/">
                    <Image src={image2} width={350} height={234} alt="" />
                    <div className={styles.blog_content_body}>
                      <div className={styles.half_text2}>
                        <div className={styles.post_meta2}>
                          <span className={styles.post_category2}>
                            Category
                          </span>
                          <span className={styles.post_date2}>2023/10/4</span>
                        </div>
                        <h2>
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit.
                        </h2>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className={styles.left_card}>
                  <Link href="/">
                    <Image src={image3} width={350} height={234} alt="" />
                    <div className={styles.blog_content_body}>
                      <div className={styles.half_text2}>
                        <div className={styles.post_meta2}>
                          <span className={styles.post_category2}>
                            Category
                          </span>
                          <span className={styles.post_date2}>2023/10/4</span>
                        </div>
                        <h2>
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Non harum ad animi voluptas quia ea quisquam
                          fuga maxime
                        </h2>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className={styles.left_card}>
                  <Link href="/">
                    <Image src={image4} width={350} height={234} alt="" />
                    <div className={styles.blog_content_body}>
                      <div className={styles.half_text2}>
                        <div className={styles.post_meta2}>
                          <span className={styles.post_category2}>
                            Category
                          </span>
                          <span className={styles.post_date2}>2023/10/4</span>
                        </div>
                        <h2>
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Non harum ad animi voluptas quia ea quisquam
                          fuga maxime
                        </h2>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className={styles.right_col}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LifeStyleCategories;

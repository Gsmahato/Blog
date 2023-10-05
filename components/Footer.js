import React from "react";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import ganesha from "../public/ganesha.jpeg";
import image1 from "../public/image1.jpeg";
const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.site_row}>
            <div className={styles.left_card1}>
              <h3>Paragraph</h3>
              <Link href="/">
                <Image src={image1} width={350} height={234} alt="" />
                <div className={styles.blog_content_body2}>
                  <div className={styles.half_text3}>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Non harum ad animi voluptas quia ea quisquam fuga maxime
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div className={styles.left_card2}>
              <h3>Latest Posts</h3>
              <ul>
                <li>
                  <Link href=''>
                    <Image src={image1} width={90} height={60} alt="images"/>
                    <div className={styles.blog_content_body1}>
                    <div className={styles.half_text2}>
                      <div className={styles.post_meta2}>
                        <span className={styles.post_category2}>Category</span>
                        <span className={styles.post_date2}>2023/10/4</span>
                      </div>
                      <h2>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit.
                      </h2>
                    </div>
                  </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      Footer
    </>
  );
};

export default Footer;

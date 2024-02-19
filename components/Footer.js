import React from "react";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import ganesha from "../public/ganesha.jpeg";
import image1 from "../public/image1.jpeg";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaSearch,
} from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <div className={styles.service_container}>
      <div className={styles.container}>
          <div className={styles.site_row}>
            <div className={styles.left_card1}>
              <h3>About Me</h3>
              {/* <Link href="/"> */}
                {/* <Image src={image1} width={350} height={234} alt="" /> */}
                <div className={styles.blog_content_body2}>
                  <div className={styles.half_text3}>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Non harum ad animi voluptas quia ea quisquam fuga maxime
                    </p>
                  </div>
                </div>
              {/* </Link> */}
            </div>
            <div className={styles.left_card2}>
            <div className={styles.quick_links}>
                <h3>Explore</h3>
                <ul>
                  <li>
                    <Link href="">Contact us</Link>
                  </li>
                  <li>
                    <Link href="">Blog</Link>
                  </li>
                  <li>
                    <Link href="">PU Resources</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.left_card3}>
              <div className={styles.quick_links}>
                <h3>Quick Links</h3>
                <ul>
                  <li>
                    <Link href="">Travel</Link>
                  </li>
                  <li>
                    <Link href="">Categories</Link>
                  </li>
                  <li>
                    <Link href="">Adventures</Link>
                  </li>
                </ul>
              </div>
              <div className={styles.social_media_links}>
                <h3>Follow Me</h3>
                <ul>
                  <li>
                    <Link href="">
                      <span>
                        <i>
                          <FaFacebookF />
                        </i>
                      </span>
                      Facebook
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <span>
                        <i>
                          <FaInstagram />
                        </i>
                      </span>
                      Instagram
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <span>
                        <i>
                          <FaLinkedinIn />
                        </i>
                      </span>
                      LinkedIn
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.site_row_footer}>
            <div>Copyright ©</div>
            <div>2024 All rights Reserved.Gurusharan.</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

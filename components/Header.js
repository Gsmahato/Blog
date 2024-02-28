import React, { useState } from "react";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
const Header = () => {
  const [showNavbar , setShowNavbar] = useState(false);

  return (
    <>
      <div className={styles.header}>
        <div className={styles.top_header}>
          <div className={styles.container}>
            <div className={styles.content_row}>
              <div className={styles.res_mob}>
              <div className={styles.social_content}>
                <Link href="/">
                  <span className={styles.social_media}>
                    <i>
                      <FaFacebookF />
                    </i>
                  </span>
                </Link>
                <Link href="/">
                  <span className={styles.social_media}>
                    <i>
                      <FaInstagram />
                    </i>
                  </span>
                </Link>
                <Link href="/">
                  <span className={styles.social_media}>
                    <i>
                      <FaLinkedinIn />
                    </i>
                  </span>
                </Link>
              </div>
              <div className={styles.Menu_icon}>
                <span>
                  <FiMenu />
                </span>
              </div>
              </div>
              <nav>
                <ul className={styles.main_nav}>
                  <li className={styles.main_list}>
                    <Link href="/">
                      <span className={styles.main_nav_item}>Home</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/about">
                      <span>About</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/services">
                      <span>Services</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <span>Contact</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog">
                      <span>Blog</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/puresource">
                      <span>PU Resources</span>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>

     
    </>
  );
};

export default Header;

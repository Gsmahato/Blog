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
  const [showNavbar, setShowNavbar] = useState(false);

  const toggleNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const handleNavbarItemClick = () => {
    setShowNavbar(false);
  };

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
                  <span onClick={toggleNavbar}>
                    <FiMenu />
                  </span>
                </div>
              </div>
              <nav className={`${styles.resNavbar} ${showNavbar ? styles.show : ''}`}>
                <ul className={styles.main_nav}>
                  <li className={styles.main_list} onClick={handleNavbarItemClick}>
                    <Link href="/">
                      <span className={styles.main_nav_item}>Home</span>
                    </Link>
                  </li>
                  <li className={styles.main_list} onClick={handleNavbarItemClick}>
                    <Link href="/about">
                      <span className={styles.main_nav_item}>About</span>
                    </Link>
                  </li>
                  <li className={styles.main_list} onClick={handleNavbarItemClick}>
                    <Link href="/services">
                      <span className={styles.main_nav_item}>Services</span>
                    </Link>
                  </li>
                  <li className={styles.main_list} onClick={handleNavbarItemClick}>
                    <Link href="/contact">
                      <span className={styles.main_nav_item}>Contact</span>
                    </Link>
                  </li>
                  <li className={styles.main_list} onClick={handleNavbarItemClick}>
                    <Link href="/blog">
                      <span className={styles.main_nav_item}>Blog</span>
                    </Link>
                  </li>
                  <li className={styles.main_list} onClick={handleNavbarItemClick}>
                    <Link href="/puresource">
                      <span className={styles.main_nav_item}>PU Resources</span>
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

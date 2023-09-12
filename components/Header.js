import React from "react";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaSearch,
} from "react-icons/fa";
const Header = () => {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.top_header}>
          <div className={styles.container}>
            <div className={styles.content_row}>
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
              <div className={styles.search_content}>
                <form action="#" className={styles.search_top_form}>
                  <span className={styles.search_icon_top}>
                    <i>
                      <FaSearch />
                    </i>
                  </span>
                  <input
                      type="text"
                      placeholder="Type keyword to search..."
                    />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.logo_row}>
          <div className={styles.logo_text_centre}>
            <Link href="/"></Link>
            <h1 className={styles.site_logo}>
              <Link href="/">Gurusharan Mahato</Link>
            </h1>
          </div>
        </div>
      </div>
      <div className={styles.navbar}>
        <div className={styles.container}>
          <div className={styles.navbar_content}>
            <ul className={styles.content_list}>
              <li className={styles.nav_item}>
                <Link href="/">Home</Link>
              </li>
              <li className={styles.nav_item_dropdown}>
                <Link href="/">Travel</Link>
                <div className={styles.dropdown_menu}>
                  <Link href="/">Home</Link>
                  <Link href="/">Home</Link>
                  <Link href="/">Home</Link>
                  <Link href="/">Home</Link>
                </div>
              </li>
              <li className={styles.nav_item_dropdown}>
                <Link href="/">Travel</Link>
                <div className={styles.dropdown_menu}>
                  <Link href="/">Home</Link>
                  <Link href="/">Home</Link>
                  <Link href="/">Home</Link>
                  <Link href="/">Home</Link>
                </div>
              </li>
              <li className={styles.nav_item}>
                <Link href="/">Home</Link>
              </li>
              <li className={styles.nav_item}>
                <Link href="/">Home</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

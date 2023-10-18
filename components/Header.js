import React, { useState } from "react";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaSearch,
} from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
const Header = ({ items, data }) => {
  console.log(items)
  const [showTravelDropdown, setShowTravelDropdown] = useState(false);
  const [showCategoriesDropdown, setShowCategoriesDropdown] = useState(false);
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
                  <input type="text" placeholder="Type keyword to search..." />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.logo_row}>
          <div className={styles.logo_text_centre}>
            <Link href="/">
              <FiMenu />
            </Link>
            <h1 className={styles.site_logo}>
              <Link href="/">Gurusharan</Link>
            </h1>
          </div>
        </div>
      </div>
      <nav className={styles.navbar}>
        <div
          className={styles.container}
          onMouseLeave={() => {
            setShowTravelDropdown(false);
            setShowCategoriesDropdown(false);
          }}
        >
          <div className={styles.navbar_content}>
            <ul className={styles.content_list}>
              {items.map((navitem) => (
                <li className={styles.drop_icon} key={navitem._id}>
                  <Link
                    href="/"
                    className={styles.nav_item}
                    onMouseEnter={() => {
                      setShowTravelDropdown(navitem.title === "Travel");
                      setShowCategoriesDropdown(navitem.title === "Categories");
                    }}
                  >
                    {navitem.title}
                  </Link>
                  {navitem.title === "Travel" && (
                    <span className={styles.dropdown_icon}>&#9662;</span>
                  )}
                  {navitem.title === "Categories" && (
                    <span className={styles.dropdown_icon1}>&#9662;</span>
                  )}
                </li>
              ))}
            </ul>
            {showTravelDropdown && (
              <div
                className={styles.dropdown_menu}
                onMouseLeave={() => setShowTravelDropdown(false)}
              >
                {data.blogs.map((subitem) => (
                  <Link
                    href="/"
                    key={subitem._id}
                    className={styles.dropdown_menu_item}
                  >
                    {subitem.category}
                  </Link>
                ))}
              </div>
            )}
            {showCategoriesDropdown && (
              <div
                className={styles.dropdown_menu1}
                onMouseLeave={() => setShowCategoriesDropdown(false)}
              >
                {data.blogs.map((subCat) => (
                  <Link
                    href="/"
                    key={subCat._id}
                    className={styles.dropdown_menu_item}
                  >
                    {subCat.category}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;

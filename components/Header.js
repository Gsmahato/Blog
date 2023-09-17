import React, { useState } from "react";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaSearch,
} from "react-icons/fa";
import { navItems, subNavItem, subCategory } from "./NavItems";
const Header = () => {
  const [openSubItem, setOPenSubItem] = useState(false);

  const toggleSubItem = () => {
    setOPenSubItem(!openSubItem);
  };
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
            <Link href="/"></Link>
            <h1 className={styles.site_logo}>
              <Link href="/">Gurusharan</Link>
            </h1>
          </div>
        </div>
      </div>
      <nav className={styles.navbar}>
        <div className={styles.container}>
          <div className={styles.navbar_content}>
            <ul className={styles.content_list}>
              {navItems.map((item) => {
                return (
                  <li key={item.id} className={styles.nav_item}>
                    {item.title === "Travel" || item.title === "Categories" ? (
                      <Link
                        href={item.path}
                        onMouseEnter={toggleSubItem}
                        onMouseLeave={toggleSubItem}
                      >
                        {item.title}
                      </Link>
                    ) : (
                      <Link href={item.path}>{item.title}</Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
          {openSubItem && (
            <div className={styles.dropdown_menu}>
              {subNavItem.map((subitem) => {
                return (
                  <Link
                    href={subitem.path}
                    key={subitem.title}
                    className={styles.dropdown_menu_item}
                  >
                    {subitem.title}
                  </Link>
                );
              })}
            </div>
          )}
          {openSubItem && (
            <div className={styles.dropdown_menu1}>
              {subCategory.map((subCat) => {
                return (
                  <Link
                    href={subCat.path}
                    key={subCat.id}
                    className={styles.dropdown_menu_item}
                  >
                    {subCat.title}
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Header;

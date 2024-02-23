import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import SliderSection from "../../components/SliderSection";
import CardSection from "../../components/CardSection";
import CardForBlog from "../../components/CardForBlog";
import LifeStyleCategories from "../../components/LifeStyleCategories";
import MoreBlog from "../../components/MoreBlog";

const blog = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null); // Track selected option
  const options = ["Option 1", "Option 2", "Option 3"];

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option); // Update selected option
    setIsOpen(false); // Close the dropdown
  };
  return (
    <div className={styles.sub_container}>
      <div className={styles.container}>
        <div className={styles.blog_container_search}>
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
            <ul className={styles.main_nav}>
              <li className={styles.main_list}>
                <Link href="/">
                  <span className={styles.main_nav_item}>Home</span>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <span>Categories</span>
                </Link>
              </li>
            </ul>
          {/* <div className="custom-dropdown">
            <button
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {selectedOption || "Select an Option"}{" "}
            </button>
            {isOpen && (
              <ul className="dropdown-list">
                {options.map((option, index) => (
                  <li key={index} onClick={() => handleOptionClick(option)}>
                    {option}
                  </li>
                ))}
              </ul>
            )}
          </div> */}
        </div>
        <SliderSection/>
        <CardForBlog/>
        <LifeStyleCategories data ={data}/>
        <MoreBlog/>
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  const res = await fetch(
    `https://blog-backend-sigma-eight.vercel.app/api/v1/blog/all-blog`
  );
  const data = await res.json();

  const nav = await fetch(
    `https://blog-backend-sigma-eight.vercel.app/api/v1/navitem/get-navitem`
  );
  const item = await nav.json();
  return {
    props: { data, item },
  };
}

export default blog;

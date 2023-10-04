import React, { useState } from "react";
import styles from "@/styles/Home.module.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";
import { SliderData } from "./NavItems";
import Link from "next/link";
// import Slide from "./slide";

export default function SliderSection({ imagedata }) {
  console.log(imagedata);
  const [curr, setCurr] = useState(0);
  // const length = imagedata.length;
  const prev = () =>
    setCurr((curr) => (curr == 0 ? imagedata.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr == imagedata.length - 1 ? 0 : curr + 1));
  return (
    <>
      <section className={styles.site_section}>
        <div className={styles.container}>
          <div className={styles.site_row}>
            <div className={styles.site_col}>
              {SliderData.map((imagedata, index) => {
                return (
                  <div className={styles.slide_outer} key={index}>
                    <Link href="/">
                      <Image
                        src={imagedata.image}
                        width={1110}
                        height={500}
                        alt="image"
                      />
                      <div className={styles.overlays}></div>
                      <div className={styles.half_text}>
                        <div className={styles.post_meta}>
                          <span className={styles.post_category}>Category</span>
                          <span className={styles.post_date}>2023/10/4</span>
                        </div>
                        <h3>
                         {imagedata.title}
                        </h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum ducimus consequuntur aperiam iste deleniti omnis fugit consectetur numquam quo non impedit eius facilis sunt voluptas, ipsum aut libero, magnam error.</p>
                      </div>
                    </Link>
                  </div>
                );
              })}
              <div className={styles.site_slider}>
                <button className={styles.leftbtn} onClick={prev}>
                  <FaChevronLeft />
                </button>
                <button className={styles.rightbtn} onClick={next}>
                  <FaChevronRight />
                </button>
              </div>
            </div>

            <div className={styles.site_dots}></div>
          </div>
        </div>
      </section>
    </>
  );
}

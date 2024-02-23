import React, { useState } from "react";
import styles from "@/styles/Home.module.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";
import { SliderData } from "./NavItems";
import Link from "next/link";

export default function SliderSection({imagedata}) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % SliderData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + SliderData.length) % SliderData.length);
    const slideTransform = `translateX(-${currentSlide * 100}%)`;
  };
  return (
    <>
      {/* <section className={styles.site_section}>
        <div className={styles.container}> */}
          <div className={styles.site_row}>
            <div className={styles.site_col}>
              {SliderData.map((imagedata) => {
                return (
                  <div className={styles.slide_outer} key={imagedata.id} >
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
                <button className={styles.leftbtn} onClick={prevSlide}>
                  <FaChevronLeft />
                </button>
                <button className={styles.rightbtn} onClick={nextSlide}>
                  <FaChevronRight />
                </button>
              </div>
            </div>

            <div className={styles.site_dots}></div>
          </div>
        {/* </div>
      </section> */}
    </>
  );
}

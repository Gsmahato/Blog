import React from "react";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import ganesha from "../public/ganesha.jpeg";
import image1 from "../public/image1.jpeg";
import image2 from "../public/image2.jpg";
import image3 from "../public/image3.jpg";
import image4 from "../public/image4.jpg";

const LifeStyleCategories = ({ data }) => {
  return (
    <>
      {/* <div>
        <div className={styles.container}> */}
      <div className={styles.headlines}>
        <div className={styles.headlines_name}>
          <h2>Lifestyle Category</h2>
        </div>
      </div>
      <div className={styles.blog_enteries}>
        <div className={styles.left_col}>
          {/* <div className={styles.left_row}>
                {data.blogs.map((blog) => (
                  <div className={styles.left_card} key={blog._id}>
                    <Link href={`/blog/${blog._id}`}>
                      <Image
                        src={image1}
                        width={350}
                        height={234}
                        alt=""
                      />
                      <div className={styles.blog_content_body}>
                        <div className={styles.half_text2}>
                          <div className={styles.post_meta2}>
                            <span className={styles.post_category2}>
                              {blog.category}
                            </span>
                            <span className={styles.post_date2}>
                              {blog.createdAt} {blog._id}
                            </span>
                          </div>
                          <h2>{blog.title}</h2>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div> */}
          <div className={styles.featuredProject}>
            <div className={styles.projectContainer}>
              {data.blogs.map((blog) => (
                <div key={blog._id} className={styles.projectCards}>
                  <Link href={`/blog/${blog._id}`}>
                    <Image
                      src={image1}
                      alt={blog.title}
                      width={300}
                      height={200}
                    />
                    <div className={styles.post_meta2}>
                      <span className={styles.post_category2}>
                        {blog.category}
                      </span>
                      <span className={styles.post_date2}>
                        {blog.createdAt} {blog._id}
                      </span>
                    </div>
                    <h3>{blog.title}</h3>
                    <p>{blog.description}</p>
                    {/* <a
                    href={blog.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                  </a> */}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.right_col}></div>
      </div>
      {/* </div>
      </div> */}
    </>
  );
};

export default LifeStyleCategories;

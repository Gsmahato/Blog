import React from "react";
import styles from "@/styles/Home.module.css";

const BlogPage = ({blogs}) => {
  return (
    <>
      <div className={styles.blogpage_site}>
        <div className={styles.container}>
          <div className={styles.blog_enteries}>
            <div className={styles.left_col}>
              <h1>{blogs.blog.title}</h1>
              <div className={styles.post_meta2}>
                <span className={styles.post_category2}>{blogs.blog.category}</span>
                <span className={styles.post_date2}>{blogs.blog.createdAt}</span>
              </div>
              <div className={styles.post_body_content}>
                <p>{blogs.blog.content}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps({ params }) {
    const res = await fetch(
      `https://blog-backend-sigma-eight.vercel.app/api/v1/blog/get-blog/${params.id}`
    );
    const blogs = await res.json();
  
    return { props: { blogs } };
  }
export default BlogPage;

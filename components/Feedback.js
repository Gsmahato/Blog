import React from 'react'
import styles from "@/styles/Home.module.css";


const Feedback = () => {
  return (
    <div className={styles.service_container}>
    <div className={styles.container}>
      <div className={styles.service_title}>
        <div className={styles.service_content}>
          <h1 className={styles.service_title_text}>Client's Feedback About Me</h1>
          <p className={styles.service_paragraph}>
          It is very easy to start smoking but it is an uphill task to quit it. Ask any chain smoker or even a person.
          </p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Feedback
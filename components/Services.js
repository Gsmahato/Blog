import React from "react";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { FaLaptop } from "react-icons/fa";
import { AiOutlinePieChart } from "react-icons/ai";
import { IoRocketOutline } from "react-icons/io5";
import { MdOutlinePhonelinkSetup } from "react-icons/md";


const Services = () => {
  return (
    <div className={styles.service_container}>
      <div className={styles.container}>
        <div className={styles.service_title}>
            <div className={styles.service_content}>
                <h1 className={styles.service_title_text}>My Offered Services</h1>
                <p className={styles.service_paragraph}>At about this time of year, some months after New Year's resolutions have been made and kept, or made and neglected.</p>
            </div>
        </div>
        <div className={styles.offered_row}>
            <div className={styles.offered_column}>
                <div className={styles.single_services}>
                    <span><AiOutlinePieChart/></span>
                    <Link href='/'>
                        <h4 className={styles.offered_title}>Web Design</h4>
                    </Link>
                    <p className={styles.offered_paragraph}>It is not because things are difficult that we do not dare; it is because we do not dare that they are difficult.</p>
                </div>
            </div>
            <div className={styles.offered_column}>
                <div className={styles.single_services}>
                    <span><FaLaptop/></span>
                    <Link href='/'>
                        <h4 className={styles.offered_title}>Web Development</h4>
                    </Link>
                    <p className={styles.offered_paragraph}>It is not because things are difficult that we do not dare; it is because we do not dare that they are difficult.</p>
                </div>
            </div>
            <div className={styles.offered_column}>
                <div className={styles.single_services}>
                    <span><MdOutlinePhonelinkSetup/></span>
                    <Link href='/'>
                        <h4 className={styles.offered_title}>Mobile App Development</h4>
                    </Link>
                    <p className={styles.offered_paragraph}>It is not because things are difficult that we do not dare; it is because we do not dare that they are difficult.</p>
                </div>
            </div>
            <div className={styles.offered_column}>
                <div className={styles.single_services}>
                    <span><IoRocketOutline/></span>
                    <Link href='/'>
                        <h4 className={styles.offered_title}>Graphic Design</h4>
                    </Link>
                    <p className={styles.offered_paragraph}>It is not because things are difficult that we do not dare; it is because we do not dare that they are difficult.</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

import React from 'react'
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { SliderData } from "./NavItems";
import Link from "next/link";
const Slide = () => {
  return (
    <>
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
            <div className={styles.half_text}>
              <div className={styles.post_meta}></div>
              <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis rem officiis minus harum minima explicabo molestiae, totam nobis animi natus fuga illum quaerat quibusdam doloremque quos amet odio eum at!</h3>
            </div>
            </Link>
          </div>
        );
      })}
      </>
  )
}

export default Slide
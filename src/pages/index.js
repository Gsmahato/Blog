import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import TopSection from "../../components/SliderSection";
import SliderSection from "../../components/SliderSection";
import CardSection from "../../components/CardSection";
import LifeStyleCategories from "../../components/LifeStyleCategories";
import MoreBlog from "../../components/MoreBlog";
import Homeabout from "../../components/Home_about";
import Header1 from "../../components/Header1";
import Services from "../../components/Services";
import Projects from "../../components/Projects";
import Feedback from "../../components/Feedback";
const inter = Inter({ subsets: ["latin"] });

export default function Home({ data}) {
  return (
    <>
      <Head>
        <title>Gurusharan</title>
        <meta name="description" content="gurusharan.com.np" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header1/>
      <Homeabout/>
      <Services/>
      <Projects/>
      <Feedback/>
      {/* <SliderSection /> */}
      {/* <CardSection /> */}
      {/* <LifeStyleCategories data={data} /> */}
      {/* <MoreBlog /> */}
    </>
  );
}

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

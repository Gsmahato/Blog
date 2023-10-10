import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import TopSection from '../../components/SliderSection'
import SliderSection from '../../components/SliderSection'
import CardSection from '../../components/CardSection'
import LifeStyleCategories from '../../components/LifeStyleCategories'
import MoreBlog from '../../components/MoreBlog'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Gurusharan</title>
        <meta name="description" content="gurusharan.com.np" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SliderSection/>
      <CardSection/>
      <LifeStyleCategories/>
      <MoreBlog/>
    </>
  )
}

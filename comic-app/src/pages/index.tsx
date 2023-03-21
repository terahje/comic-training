import styles from '../styles/Home.module.css'
import { ComicList } from '../components/ComicList'
import { Hero } from '../components/Hero'
import { Intro } from '../components/Intro'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

export default function Home() {
  return (
    <>
      <Header/>
      <Hero/>
      <Intro/>
      <ComicList/>
      <Footer/>
    </>
  )
}

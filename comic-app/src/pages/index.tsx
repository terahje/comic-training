import styles from '../styles/Home.module.css'
import { ComicList } from '../components/ComicList'
import { Hero } from '../components/Hero'
import { Intro } from '../components/Intro'

export default function Home() {
  return (
    <>
      <Hero/>
      <Intro/>
      <ComicList/>
    </>
  )
}

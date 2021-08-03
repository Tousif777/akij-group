import Head from 'next/head'
import HeaderTop from '../components/HeaderTop';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import HeaderBottom from '../components/HeaderBottom';
import Testimonial from '../components/Testimonial';
import Partners from '../components/Partners';
import Featured from '../components/Featured';


export default function Home() {
  return (
      <div className="w-full">
        <Head>
          <title> Akij Motors - Best Motor Company in Bangladesh</title>
        </Head>
        <HeaderTop />
        <Navigation />
        <HeaderBottom />
        <Hero />
        <Featured />
        <div className="w-full h-96 p-10 flex justify-center items-center flex-col">
          <div className="animate-spin text-5xl text-akij-red filter drop-shadow-2xl"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" version="1.1" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M8 0c-4.355 0-7.898 3.481-7.998 7.812 0.092-3.779 2.966-6.812 6.498-6.812 3.59 0 6.5 3.134 6.5 7 0 0.828 0.672 1.5 1.5 1.5s1.5-0.672 1.5-1.5c0-4.418-3.582-8-8-8zM8 16c4.355 0 7.898-3.481 7.998-7.812-0.092 3.779-2.966 6.812-6.498 6.812-3.59 0-6.5-3.134-6.5-7 0-0.828-0.672-1.5-1.5-1.5s-1.5 0.672-1.5 1.5c0 4.418 3.582 8 8 8z"></path></svg></div>
          <h1 className="text-xl md:2xl py-5 font-bold text-akij-blue filter drop-shadow-lg">Under Development</h1>
        </div>
        <Partners />
        <Testimonial />
        <Footer />
      </div>
  )
}

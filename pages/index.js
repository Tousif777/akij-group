import Head from 'next/head';
import HeaderTop from '../components/HeaderTop';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import HeaderBottom from '../components/HeaderBottom';
import Testimonial from '../components/Testimonial/Testimonial';
import Featured from '../components/Featured/Featured';
import Customers from '../components/Customers/Customers';
import PlayerSection from '../components/PlayerSection/PlayerSection';
import Partners from '../components/Partners/Partners';

export default function Home() {
  return (
    <div className="w-full">
      <Head>
        <title>Akij Motors - Best Motor Company in Bangladesh</title>
      </Head>
      <HeaderTop />
      <Navigation />
      <HeaderBottom />
      <Hero />
      <Featured />
      <Customers />
      <PlayerSection />
      <Testimonial />
      <Partners />
      <Footer />
    </div>
  );
}

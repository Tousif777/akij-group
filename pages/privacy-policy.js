import Head from 'next/head';
import Footer from '../components/Footer';
import HeaderBottom from '../components/HeaderBottom';
import HeaderTop from '../components/HeaderTop';
import Navigation from '../components/Navigation';
import PrivacyPolicy from '../components/PrivacyPolicy/PrivacyPolicy';

export default function privacyPolicy() {
  return (
    <>
      <Head>
        <title>Akij Motors | privacy</title>
      </Head>

      <main>
        <HeaderTop />
        <HeaderBottom />
        <Navigation />
        <PrivacyPolicy />
        <Footer />
      </main>
    </>
  );
}

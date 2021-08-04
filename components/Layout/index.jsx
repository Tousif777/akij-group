import Footer from '../Footer';
import HeaderTop from '../HeaderTop';
import HeaderBottom from '../HeaderBottom';
import Navigation from '../Navigation';

const Layout = ({ children }) => {
  return (
    <div>
      <HeaderTop />
      <Navigation />
      <HeaderBottom />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;

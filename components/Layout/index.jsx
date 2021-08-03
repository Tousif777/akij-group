import Footer from "../Footer";
import HeaderTop from "../HeaderTop";
import HeaderBottom from "../HeaderBottom";
const Layout = ({ children }) => {
  return (
    <div>
      <HeaderTop />
      <HeaderBottom />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;

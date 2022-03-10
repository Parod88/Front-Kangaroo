import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './layoutGeneral.scss';

function LayoutGeneral({ children }) {
  return (
    <div id="layout-general">
      <Navbar />
      {/* <main>{children}</main> */}
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default LayoutGeneral;

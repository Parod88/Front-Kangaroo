import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './LayoutGeneral.scss';

function LayoutGeneral({ children, ...props }) {
  return (
    <div id="layout-general">
      <div className="grid">
        <div className="layout-header">
          <Navbar {...props} />
        </div>

        <div className="layout-body">
          <div className="container">
            <main>
              <section>{children}</section>
            </main>
          </div>
        </div>

        <div className="layout-footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default LayoutGeneral;

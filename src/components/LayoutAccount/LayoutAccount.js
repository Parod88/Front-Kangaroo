import SidebarAccount from '../SidebarAccount/SidebarAccount';
import Navbar from '../Navbar/Navbar';
import './LayoutAccount.scss';

function LayoutAccount({ title, subtitle, children, background = true }) {
  return (
    <div id="layout-account">
      <Navbar />
      <div className="layout-account-body">
        <SidebarAccount />
        <main className="">
          <div>
            <h2>{title}</h2>
            <h5>{subtitle}</h5>
          </div>
          <div className={background ? 'body-container' : ''}>{children}</div>
        </main>
      </div>
    </div>
  );
}

export default LayoutAccount;

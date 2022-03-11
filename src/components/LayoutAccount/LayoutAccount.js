import SidebarAccount from '../SidebarAccount/SidebarAccount';
import Navbar from '../Navbar/Navbar';
import './LayoutAccount.scss';

function LayoutAccount({ children }) {
  return (
    <div id="layout-account">
      <Navbar />
      <div className="body">
        <SidebarAccount />
        <main className="">{children}</main>
      </div>
    </div>
  );
}

export default LayoutAccount;

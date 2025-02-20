import Mobile from "./components/Mobile";
import Nav from "./components/Nav";
import SideBar from "./components/SideBar";
export const metadata = {
  title: "Admin Dashboard",
  description: "GANI-OLA ENGINEERING SERVICES LTD",
};
export default function Layout({ children }) {
  return (
    <div className="overflow-x-hidden  flex flex-col relative ">
      <div>
        <Nav />
      </div>
      <div className="flex w-screen ">
        <SideBar />
        {children}
        <Mobile />
      </div>
    </div>
  );
}

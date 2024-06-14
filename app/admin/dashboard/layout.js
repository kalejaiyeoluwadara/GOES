import Nav from "./components/Nav";
import SideBar from "./components/SideBar";
export const metadata = {
  title: "Admin Dashboard",
  description: "GANI-OLA ENGINEERING SERVICES LTD",
};

export default function Layout({ children }) {
  return (
    <body className="overflow-x-hidden flex flex-col relative ">
      <div>
        <Nav />
      </div>
      <div className="flex">
        <SideBar />
        {children}
      </div>
    </body>
  );
}

import Nav from "./components/Nav";
import SideBar from "./components/SideBar";
export const metadata = {
  title: "Admin Dashboard",
  description: "GANI-OLA ENGINEERING SERVICES LTD",
};

export default function Layout({ children }) {
  return (
    <body className="overflow-x-hidden">
      <Nav />
      <SideBar />
      {children}
    </body>
  );
}

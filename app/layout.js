import "./globals.css";
import Nav from "./components/Nav";
import AppProvider from "./Context";
import Footer from "./components/Footer";
import Menu from "./components/Menu";

export const metadata = {
  title: "GOES LTD",
  description: "GANI-OLA ENGINEERING SERVICES LTD",
};

export default function RootLayout({ children, sho }) {
  return (
    <html className="overflow-x-hidden" lang="en">
      <body className="overflow-x-hidden w-full relative ">
        <AppProvider>
          <Nav />
          <Menu />
          {children}
        </AppProvider>
      </body>
    </html>
  );
}

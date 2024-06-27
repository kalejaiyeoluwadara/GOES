import "./globals.css";
import Nav from "./components/Nav";
import AppProvider from "./Context";
import Footer from "./components/Footer";

export const metadata = {
  title: "GOES LTD",
  description: "GANI-OLA ENGINEERING SERVICES LTD",
};

export default function RootLayout({ children, sho }) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden relative ">
        <AppProvider>
          <Nav />
          {children}
        </AppProvider>
      </body>
    </html>
  );
}

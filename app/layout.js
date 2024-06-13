import "./globals.css";
import Nav from "./components/Nav";
import AppProvider from "./Context";

export const metadata = {
  title: "GANI-OLA",
  description: "GANI-OLA ENGINEERING SERVICES LTD",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">
        <Nav />
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}

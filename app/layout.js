import "./globals.css";
import Nav from "./components/Nav";

export const metadata = {
  title: "GANI-OLA",
  description: "GANI-OLA ENGINEERING SERVICES LTD",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">
        <Nav />
        {children}
      </body>
    </html>
  );
}

// import Nav from "./components/Nav";
// import AppProvider from "./Context";

export const metadata = {
  title: "Admin Login",
  description: "GANI-OLA ENGINEERING SERVICES LTD",
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">
        {/* <Nav /> */}
        {children}
      </body>
    </html>
  );
}

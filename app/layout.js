import "./globals.css";
import Nav from "./components/Nav";
import AppProvider from "./Context";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import { ToastContainer } from "react-toastify";

export const metadata = {
  title: {
    default: "GOES LTD – Reliable Construction Services in Nigeria",
    template: "%s | GOES LTD",
  },
  description: "GANI-OLA ENGINEERING SERVICES LTD (GOES LTD) provides expert construction, renovation, and consultancy services across Nigeria.",
  keywords: [
    "construction company in Nigeria",
    "building contractors",
    "renovation services",
    "SIWES placement",
    "NYSC construction training",
    "GOES LTD",
    "Ibadan construction",
    "building",
  ],
  metadataBase: new URL("https://goesltd.com"),
  openGraph: {
    title: "GOES LTD – Building With Trust",
    description: "Explore GOES LTD’s construction, renovation, and consultancy services. We deliver quality, reliability, and expert support.",
    url: "https://goesltd.com",
    siteName: "GOES LTD",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "GOES LTD – Trusted Construction Company in Nigeria",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GOES LTD – Construction, Renovation & Consultancy",
    description: "We help you plan and build with confidence. Discover GOES LTD’s professional services.",
    images: ["/og-image.jpg"],
    creator: "@goesltd", // optional if you have one
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className="overflow-x-hidden w-full relative">
        <AppProvider>
          <Nav />
          <ToastContainer />
          <Menu />
          {children}
          {/* <Footer /> */}
        </AppProvider>
      </body>
    </html>
  );
}

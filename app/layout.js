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
  description:
    "GANI-OLA ENGINEERING SERVICES LTD (GOES LTD) provides expert construction, renovation, and consultancy services across Nigeria.",
  keywords: [
    "construction company in Nigeria",
    "building contractors",
    "renovation services",
    "SIWES placement",
    "NYSC construction training",
    "GOES LTD",
    "Ibadan construction",
    "building",
    "construction consultancy",
    "project planning",
    "structural design",
    "residential construction",
    "commercial construction",
    "industrial construction",
  ],
  authors: [{ name: "GOES LTD" }],
  creator: "GOES LTD",
  publisher: "GOES LTD",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://goesltd.com"),
  alternates: {
    canonical: "https://goesltd.com",
  },
  openGraph: {
    title: "GOES LTD – Building With Trust",
    description:
      "Explore GOES LTD's construction, renovation, and consultancy services. We deliver quality, reliability, and expert support.",
    url: "https://goesltd.com",
    siteName: "GOES LTD",
    locale: "en_NG",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "GOES LTD – Trusted Construction Company in Nigeria",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GOES LTD – Construction, Renovation & Consultancy",
    description:
      "We help you plan and build with confidence. Discover GOES LTD's professional services.",
    images: ["/og-image.jpg"],
    creator: "@goesltd",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Replace with actual verification code
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "GOES LTD",
    alternateName: "GANI-OLA ENGINEERING SERVICES LTD",
    url: "https://goesltd.com",
    logo: "https://goesltd.com/logo.svg",
    description:
      "GOES LTD provides expert construction, renovation, and consultancy services across Nigeria.",
    foundingDate: "2020",
    address: {
      "@type": "PostalAddress",
      streetAddress: "21A, Tunji Bello Street, Ikolaba Estate",
      addressLocality: "Ibadan",
      addressRegion: "Oyo State",
      addressCountry: "Nigeria",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+234-803-3244-038",
      contactType: "customer service",
      email: "goeslimited@gmail.com",
    },
    sameAs: ["https://wa.link/zps3e2"],
    serviceArea: {
      "@type": "Country",
      name: "Nigeria",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Construction Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Construction Services",
            description:
              "Residential, commercial, and industrial construction projects",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Renovation Services",
            description: "Building renovation and remodeling services",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Construction Consultancy",
            description:
              "Expert advice on project planning, budgeting, and structural design",
          },
        },
      ],
    },
  };

  return (
    <html lang="en" className="overflow-x-hidden">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
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

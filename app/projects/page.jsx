import React from "react";
import ProjectContent from "./ProjectContent";

export const metadata = {
  title: "Our Projects – GOES LTD Construction Company in Nigeria",
  description:
    "Explore a portfolio of our construction projects across Nigeria – residential, commercial, and industrial builds. See what GOES LTD has accomplished.",
  alternates: {
    canonical: "https://goesltd.com/projects",
  },
  openGraph: {
    title: "Our Projects – GOES LTD Construction Company",
    description:
      "Browse through GOES LTD's completed and ongoing construction projects showcasing quality, reliability, and innovation.",
    type: "website",
    url: "https://goesltd.com/projects",
    images: [
      {
        url: "https://goesltd.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "GOES LTD Construction Projects",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Projects – GOES LTD Construction Company",
    description:
      "Browse through GOES LTD's completed and ongoing construction projects showcasing quality, reliability, and innovation.",
    images: ["https://goesltd.com/og-image.jpg"],
  },
};

function Page() {
  return (
    <ProjectContent />
  );
}

export default Page;

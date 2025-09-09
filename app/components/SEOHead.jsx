import Head from "next/head";

const SEOHead = ({
  title,
  description,
  canonical,
  ogImage = "/og-image.jpg",
  ogType = "website",
  noindex = false,
}) => {
  const fullTitle = title
    ? `${title} | GOES LTD`
    : "GOES LTD – Reliable Construction Services in Nigeria";
  const fullDescription =
    description ||
    "GANI-OLA ENGINEERING SERVICES LTD (GOES LTD) provides expert construction, renovation, and consultancy services across Nigeria.";
  const fullCanonical = canonical || "https://goesltd.com";

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      <link rel="canonical" href={fullCanonical} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:image" content={`https://goesltd.com${ogImage}`} />
      <meta property="og:site_name" content="GOES LTD" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={`https://goesltd.com${ogImage}`} />

      {/* Robots */}
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      {/* Additional SEO */}
      <meta name="author" content="GOES LTD" />
      <meta name="publisher" content="GOES LTD" />
      <meta name="copyright" content="GOES LTD" />
      <meta name="language" content="en-NG" />
      <meta name="geo.region" content="NG" />
      <meta name="geo.placename" content="Ibadan, Nigeria" />
      <meta name="geo.position" content="7.3775;3.9470" />
      <meta name="ICBM" content="7.3775, 3.9470" />
    </Head>
  );
};

export default SEOHead;

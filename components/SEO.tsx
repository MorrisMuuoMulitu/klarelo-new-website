import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  type?: string;
  image?: string;
  schema?: object;
}

const SEO = ({ title, description, canonical, type = 'website', image, schema }: SEOProps) => {
  const siteUrl = 'https://klarelocommunications.com';
  const defaultImage = "https://ik.imagekit.io/5zp8ovb7c/Klarelo/Logos/Klarelo%20Communications%20Logo%20V2%20Transparent%20Bg.png?updatedAt=1765824981603";
  const metaImage = image || defaultImage;
  // Construct canonical. If canonical isn't provided, default to siteUrl. 
  // If it is provided and relative, append to siteUrl.
  const fullCanonical = canonical 
    ? (canonical.startsWith('http') ? canonical : `${siteUrl}${canonical}`)
    : siteUrl;

  return (
    <Helmet>
      {/* Standard Meta Tags */}
      <title>{title} | Klarelo Communications</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullCanonical} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:site_name" content="Klarelo Communications" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={metaImage} />
      
      {/* Schema.org Structured Data */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
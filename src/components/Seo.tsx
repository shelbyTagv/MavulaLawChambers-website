import { Helmet } from "react-helmet-async";
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from "../seo/siteMeta";

type SeoProps = {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  structuredData?: Record<string, unknown> | Record<string, unknown>[];
};

export default function Seo({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  structuredData,
}: SeoProps) {
  const currentPath = path || (typeof window !== "undefined" ? window.location.pathname : "/");
  const canonicalUrl = `${SITE_URL}${currentPath}`;
  const pageTitle = title || SITE_NAME;
  const pageDescription =
    description ||
    "Mavula & Co. Law Chambers is a trusted law firm in Plumtree, Zimbabwe, providing strategic legal guidance and client-focused representation.";

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={image} />

      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
}

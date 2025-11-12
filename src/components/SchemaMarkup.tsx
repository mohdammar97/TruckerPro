import { Helmet } from "react-helmet-async";

interface SchemaMarkupProps {
  type: "home" | "contact" | "policy";
  policyUrl?: string;
  policyTitle?: string;
}

const globalSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "LocalBusiness"],
      "@id": "https://thetruckerpro.com/#org",
      "name": "The Trucker Pro Pvt. Ltd.",
      "url": "https://thetruckerpro.com/",
      "logo": "https://res.cloudinary.com/djtdcfoh2/image/upload/v1762933208/ChatGPT_Image_Nov_9_2025_10_37_46_PM_kmvm8a.png",
      "image": "https://res.cloudinary.com/djtdcfoh2/image/upload/v1762933484/Homepage_Image_1_qr3lxq.webp",
      "email": "support@thetruckerpro.com",
      "telephone": "+1-559-882-3863",
      "priceRange": "$$",
      "foundingDate": "2025",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "2594 N Armstrong Ave, #224",
        "addressLocality": "Fresno",
        "addressRegion": "CA",
        "postalCode": "93727",
        "addressCountry": "US"
      },
      "areaServed": {
        "@type": "Country",
        "name": "United States"
      },
      "contactPoint": [{
        "@type": "ContactPoint",
        "contactType": "customer support",
        "email": "support@thetruckerpro.com",
        "telephone": "+1-559-882-3863",
        "availableLanguage": ["en"],
        "areaServed": "US"
      }],
      "sameAs": []
    },
    {
      "@type": "WebSite",
      "@id": "https://thetruckerpro.com/#website",
      "url": "https://thetruckerpro.com/",
      "name": "The Trucker Pro",
      "publisher": { "@id": "https://thetruckerpro.com/#org" },
      "inLanguage": "en-US",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://thetruckerpro.com/search?q={query}",
        "query-input": "required name=query"
      }
    }
  ]
};

export const SchemaMarkup = ({ type, policyUrl, policyTitle }: SchemaMarkupProps) => {
  let pageSchema;

  if (type === "home") {
    pageSchema = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": "https://thetruckerpro.com/#home",
      "url": "https://thetruckerpro.com/",
      "name": "Trucker Pro - Home",
      "isPartOf": { "@id": "https://thetruckerpro.com/#website" },
      "about": { "@id": "https://thetruckerpro.com/#org" },
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": "https://res.cloudinary.com/djtdcfoh2/image/upload/v1762933484/Homepage_Image_1_qr3lxq.webp"
      },
      "description": "Cut fuel costs by up to 9% with AI-driven route and fuel-stop optimization for US truck fleets of 20+ vehicles.",
      "inLanguage": "en-US"
    };
  } else if (type === "contact") {
    pageSchema = {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "@id": "https://thetruckerpro.com/contact#webpage",
      "url": "https://thetruckerpro.com/contact",
      "name": "Trucker Pro - Contact Us",
      "isPartOf": { "@id": "https://thetruckerpro.com/#website" },
      "about": { "@id": "https://thetruckerpro.com/#org" },
      "description": "Contact The Trucker Pro to schedule a demo and learn how we reduce fuel costs for truck fleets.",
      "inLanguage": "en-US",
      "relatedLink": [
        "mailto:support@thetruckerpro.com",
        "tel:+15598823863"
      ],
      "mainEntity": {
        "@type": "Organization",
        "@id": "https://thetruckerpro.com/#org",
        "contactPoint": [{
          "@type": "ContactPoint",
          "contactType": "sales",
          "email": "support@thetruckerpro.com",
          "telephone": "+1-559-882-3863",
          "availableLanguage": ["en"],
          "areaServed": "US"
        }]
      }
    };
  } else if (type === "policy" && policyUrl && policyTitle) {
    pageSchema = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `https://thetruckerpro.com${policyUrl}#webpage`,
      "url": `https://thetruckerpro.com${policyUrl}`,
      "name": policyTitle,
      "isPartOf": { "@id": "https://thetruckerpro.com/#website" },
      "about": { "@id": "https://thetruckerpro.com/#org" },
      "inLanguage": "en-US"
    };
  }

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(globalSchema)}
      </script>
      {pageSchema && (
        <script type="application/ld+json">
          {JSON.stringify(pageSchema)}
        </script>
      )}
    </Helmet>
  );
};

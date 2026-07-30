/**
 * Reusable BreadcrumbList JSON-LD component for SEO.
 * Injects schema.org BreadcrumbList structured data into the page head.
 *
 * Usage:
 * <BreadcrumbJsonLd
 *   items={[
 *     { name: "Home", url: "https://aatral360.com" },
 *     { name: "Services", url: "https://aatral360.com/physiotherapy/services" },
 *     { name: "Sports Injury", url: "https://aatral360.com/physiotherapy/services/sports-injury" },
 *   ]}
 * />
 */

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbJsonLdProps {
  items: BreadcrumbItem[];
}

export default function BreadcrumbJsonLd({ items }: BreadcrumbJsonLdProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

import { legalServiceSchema } from "../seo/siteMeta";

export default function StructuredData({
  data,
}: {
  data?: Record<string, unknown> | Record<string, unknown>[];
}) {
  const schema = data || legalServiceSchema;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

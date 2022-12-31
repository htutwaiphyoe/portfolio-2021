import { SITEMAP_PAGES } from "@/data/sitemap";

const createSitemap = (data) => `<?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
        ${data}
        </urlset>
    `;

function SiteMap() {}

export async function getServerSideProps({ res }) {
  res.setHeader("Content-Type", "text/xml");
  res.write(createSitemap(SITEMAP_PAGES));
  res.end();

  return { props: {} };
}

export default SiteMap;

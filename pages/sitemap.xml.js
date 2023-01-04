import {
  SITEMAP_LINKS,
  SITEMAP_DOMAIN_URL,
  SITEMAP_VERSION,
} from "@/data/sitemap";
import { getAllBlogs } from "@/utils/blogs";

const createSitemap = (blogs) => `<?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
            ${SITEMAP_LINKS}
            ${blogs
              .map(
                ({ slug, date }) =>
                  `
                    <url>
                        <loc>${`${SITEMAP_DOMAIN_URL}/blogs/${slug}`}</loc>
                        <lastmod>${new Date(date).toISOString()}</lastmod>
                        <priority>${SITEMAP_VERSION}</priority>
                    </url>
                `
              )
              .join("")}
        </urlset>
    `;

function SiteMap() {}

export async function getServerSideProps({ res }) {
  const blogs =
    process.env.NODE_ENV === "production"
      ? getAllBlogs("blogs")
      : getAllBlogs();

  res.setHeader("Content-Type", "text/xml");
  res.write(createSitemap(blogs));
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;

const SITEMAP_DOMAIN_URL = "https://www.htutwaiphyoe.dev";

const SITEMAP_VERSION = 1.05;

export const SITEMAP_PAGES = `
    <url>
        <loc>${SITEMAP_DOMAIN_URL}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <priority>${SITEMAP_VERSION}</priority>
    </url>
    <url>
        <loc>${SITEMAP_DOMAIN_URL}/projects</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <priority>${SITEMAP_VERSION}</priority>
    </url>
    <url>
        <loc>${SITEMAP_DOMAIN_URL}/blogs</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <priority>${SITEMAP_VERSION}</priority>
    </url>
     <url>
        <loc>${SITEMAP_DOMAIN_URL}/blogs/careers-in-web-development</loc>
        <lastmod>${new Date("2021-07-17").toISOString()}</lastmod>
        <priority>${SITEMAP_VERSION}</priority>
    </url>
    <url>
        <loc>${SITEMAP_DOMAIN_URL}/blogs/comments-in-js</loc>
        <lastmod>${new Date("2021-06-26").toISOString()}</lastmod>
        <priority>${SITEMAP_VERSION}</priority>
    </url>
    <url>
        <loc>${SITEMAP_DOMAIN_URL}/blogs/half-year-after-working-as-a-developer</loc>
        <lastmod>${new Date("2022-04-11").toISOString()}</lastmod>
        <priority>${SITEMAP_VERSION}</priority>
    </url>
    <url>
        <loc>${SITEMAP_DOMAIN_URL}/blogs/how-to-be-a-well-prepared-beginner</loc>
        <lastmod>${new Date("2021-01-08").toISOString()}</lastmod>
        <priority>${SITEMAP_VERSION}</priority>
    </url>
    <url>
        <loc>${SITEMAP_DOMAIN_URL}/blogs/identifiers-in-js</loc>
        <lastmod>${new Date("2021-06-29").toISOString()}</lastmod>
        <priority>${SITEMAP_VERSION}</priority>
    </url>
    <url>
        <loc>${SITEMAP_DOMAIN_URL}/blogs/one-month-after-working-as-a-developer</loc>
        <lastmod>${new Date("2021-11-1").toISOString()}</lastmod>
        <priority>${SITEMAP_VERSION}</priority>
    </url>
    <url>
        <loc>${SITEMAP_DOMAIN_URL}/blogs/optional-semicolons</loc>
        <lastmod>${new Date("2021-07-03").toISOString()}</lastmod>
        <priority>${SITEMAP_VERSION}</priority>
    </url>
`;

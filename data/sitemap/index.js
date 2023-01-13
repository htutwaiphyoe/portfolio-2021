export const SITEMAP_DOMAIN_URL = "https://www.htutwaiphyoe.dev";

export const SITEMAP_VERSION = 1.05;

export const SITEMAP_LINKS = `
    <url>
        <loc>${SITEMAP_DOMAIN_URL}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <priority>${SITEMAP_VERSION}</priority>
    </url>
    <url>
        <loc>https://www.htutwaiphyoe.dev/projects</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <priority>${SITEMAP_VERSION}</priority>
    </url>
    <url>
        <loc>https://www.htutwaiphyoe.dev/blogs</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <priority>${SITEMAP_VERSION}</priority>
    </url>
`;

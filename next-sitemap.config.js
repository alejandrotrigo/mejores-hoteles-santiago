/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://webiñas.com',
  generateRobotsTxt: true, // (optional)
	sitemapSize: 7000,
  additionalPaths: async (config) => {
    // Example: get all posts from CMS
    const result = [];
    result.push({ loc: '/posts/ganar_dinero_web'});
    result.push({ loc: '/posts/ganar_dinero_web_seo'});
    result.push({ loc: '/posts/ganar_dinero_web_formularios'});
    result.push({ loc: '/posts/ganar_dinero_web_local_seo'});
    result.push({ loc: '/posts/ganar_dinero_web_marketing_afiliados'});
    return result;
  },
  // ...other options
}
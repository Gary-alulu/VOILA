/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://example.com',
  generateRobotsTxt: true, // (optional) 
  // ...other options
  // You can add more configuration here, like `exclude` or `transform`
  // For more details, see: https://github.com/iamvishnusankar/next-sitemap#configuration
};
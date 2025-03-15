/** @type {import('next-sitemap').IConfig} */
export default {
	siteUrl: process.env.SITE_URL || "https://help.getonepass.eu",
	generateRobotsTxt: true,
	outDir: "out",
	// ...other options
};

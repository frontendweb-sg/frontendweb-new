const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
	sassOptions: {
		includePaths: [path.join(__dirname, "styles")],
	},

	// swcMinify: true,
	// webpackDevMiddleware: config => {
	//   config.watchOptions = {
	//     poll: 1000,
	//     aggregateTimeout: 300,
	//   }
	//   return config
	// },
};

module.exports = nextConfig;

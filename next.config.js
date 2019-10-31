const withSass = require("@zeit/next-sass");
module.exports = {
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			use: ["@svgr/webpack"],
		});
		// config.module.rules.push({
		// 	test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
		// 	use: {
		// 		loader: "url-loader",
		// 		options: {
		// 			limit: 100000,
		// 		},
		// 	},
		// });

		return config;
	},
	...withSass({
		cssModules: true,
		sassLoaderOptions: {
			includePaths: ["styles/"],
		},
	}),
};

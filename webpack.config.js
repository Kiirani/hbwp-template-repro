const path = require('path');
const HtmlBundlerPlugin = require('html-bundler-webpack-plugin');

module.exports = {
	output: {
		path: path.resolve(__dirname, 'dist'),
		clean: true,
	},
	plugins: [
		new HtmlBundlerPlugin({
			entry: 'src/',
			minify: false,
			/* without this section, the template won't load
			loaderOptions: {
				preprocessor: 'eta',
				data: { foo: "bar" },
			}
			*/
		}),
	],
	optimization: {
		minimize: false,
	}
}

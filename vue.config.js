const webpack = require('webpack')

module.exports = {
	lintOnSave: false,
	publicPath: process.env.VUE_BASE_URL || '/vueroute',
	productionSourceMap: false,
	configureWebpack: {
		module: {
			// Fix for flot resize
			rules: [{
				test: /jquery\.flot\.resize\.js$/,
				use: 'imports-loader?this=>window'
			},
			]
		},
		plugins: [
			new webpack.ProvidePlugin({
				$: 'jquery',
				jquery: 'jquery',
				'window.jQuery': 'jquery',
				jQuery: 'jquery'
			}),
			new webpack.DefinePlugin({
				'process.env.NODE_ENV': JSON.stringify('production')
			})
		]
	},
	transpileDependencies: [
		'resize-detector' // vue-echarts
	]
}
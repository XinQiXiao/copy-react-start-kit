var express = require('express');
var webpack = require('webpack');
var webpackConfig = require('./webpack/webpack.development');

var app = express();
var compiler = webpack(webpackConfig);

app.use(require('webpack-dev-middleware')(compiler, {
	// display no info to console (only warnings and errors)
	noInfo: true,
	// options for formating the statistics
  stats: {
    colors: true,
  },
}));

// 热加载
app.use(require('webpack-hot-middleware')(compiler));

// 设置端口 默认 3000
app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), function(err) {
  if (err) {
    console.log(err);
  }
  console.log('Port is '+ app.get('port') +', please wait to build ...');
});
/* eslint no-console: 0 */
import path from 'path';
import express from 'express';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from './webpack.config.js';
import cas_list from './JSON/data/CAs.js';
import certificates_list from './JSON/data/certificates_list.js';
import certificate from './JSON/data/certificate_details.js';
import countries from './JSON/data/countries_list.js';
import certificate_types from './JSON/data/certificate_types.js';

const isDeveloping = process.env.NODE_ENV !== 'production';
const port = isDeveloping ? 3000 : process.env.PORT;
const app = express();

if (isDeveloping) {
  const compiler = webpack(config);
  const middleware = webpackMiddleware(compiler, {
    publicPath: config.output.publicPath,
    contentBase: 'src',
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false
    }
  });

  app.get('/api/cas', function(req, res){

      res.send(cas_list);

  });
  app.get('/api/certificates_list', function(req, res){

    res.send(certificates_list);

  });
  app.get('/api/certificate_details', function(req, res){

    res.send(certificate);

  });
  app.get('/api/countries', function(req, res){

    res.send(countries);

  });
  app.get('/api/certificate_types', function(req, res){

    res.send(certificate_types);

  });

  app.use(middleware);
  app.use(webpackHotMiddleware(compiler));
  app.get('*', function response(req, res) {
    res.write(middleware.fileSystem.readFileSync(path.join(__dirname, '../dist/index.html')));
    res.end();
  });
} else {
  app.use( express.static( path.join(__dirname, '../dist' ) ) )
  app.get('*', function response(req, res) {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
  });
}

app.listen(port, '0.0.0.0', function onStart(err) {
  if (err) {
    console.log(err);
  }
  console.info('==> 🌎 Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.', port, port);
});

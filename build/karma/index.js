import path from 'path';
import makeWebpackConfig from '../webpack/make';

const WEBPACK_CONFIG = makeWebpackConfig('development');

export default config => {
  config.set({
    files : [
      'app/index.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'app/test.js'
    ],
    frameworks : ['chai', 'mocha'],
    preprocessors: {
      'app/**/*.js' : ['webpack']
    },
    reporters: ['spec', 'coverage'],
    coverageReporter: {
      type : 'html',
      dir  : 'dist/coverage/'
    },
    browsers: ['PhantomJS'],
    singleRun : true,
    webpack : {
      resolve : WEBPACK_CONFIG.resolve,
      module : {
        loaders: WEBPACK_CONFIG.module.loaders
      }
    },
    webpackMiddleware : {
      noInfo : true
    },
    plugins: [
      require('karma-webpack'),
      require('karma-mocha'),
      require('karma-chai'),
      require('karma-coverage'),
      require('karma-phantomjs-launcher'),
      require('karma-spec-reporter')
    ]
  });
};

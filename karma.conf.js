module.exports = function karmaConfig(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'lib/*.js',
      'spec/*.js',
    ],
    preprocessors: {
      'lib/*.js': ['webpack'],
      'spec/*.js': ['webpack'],
    },
    client: {
      captureConsole: true,
    },
    webpack: {
      module: {
        rules: [{
          test: /\.js$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
            },
          },
        }],
      },
    },
    reporters: ['mocha'],
    port: 9877,
    colors: true,
    autoWatch: false,
    browsers: ['jsdom'],
    singleRun: true,
    browserNoActivityTimeout: 2000,
  });
};

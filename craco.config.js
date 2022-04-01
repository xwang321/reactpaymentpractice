const CracoLessPlugin = require('craco-less');

module.exports = {
  devServer: {
    open: true
  },
  plugins: [{
    plugin: CracoLessPlugin,
    options: {
      lessLoaderOptions: {
        lessOptions: {
          modifyVars: {},
          javascriptEnabled: true,
        },
      },
    },
  }],
};

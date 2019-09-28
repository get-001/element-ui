const path = require('path');

module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias.set('@element', path.relative(__dirname, 'src/components/element'));
  },
};

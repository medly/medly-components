const path = require('path');
const { configure } = require('@medly/rollup-config');

module.exports = configure({
    babelConfig: path.resolve(__dirname, 'babel.config.js'),
    tsConfig: path.resolve(__dirname, 'tsconfig.json')
});

// lib
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');

// paths
const root = path.resolve(__dirname, '..');
const buildPath = path.resolve(root, 'assets/js');
const srcPath = path.resolve(root, 'src');
// const publicPath = path.resolve(root, 'assets');
// const htmlPath = `${srcPath}/index.html`;
const indexPath = `${srcPath}/index.js`;

// loaders
// ==============================================
const loaders = [];

// Uncomment for Production Linting
// handle js linting
// loaders.push({
//   enforce: 'pre',
//   test: /\.(js|jsx)$/,
//   loader: 'eslint-loader',
//   exclude: /node_modules/,
//   options: {
//     emitError: true,
//     failOnError: true
//   }
// })

// handle js
loaders.push({
    test: /\.(js|jsx)$/,
    use: 'babel-loader'
});

// handle css

loaders.push({
    test: /\.scss$/,
    use: [
        'style-loader',
        'css-loader',
        'sass-loader',
        {
            loader: 'postcss-loader',
            options: {
                /* eslint-disable global-require */
                plugins: () => [require('autoprefixer')]
                /* eslint-disable global-require */
            }
        }
    ]
});

// handle html
loaders.push({
    test: /\.html$/,
    use: 'html-loader'
});

// handle images
loaders.push({
    test: /\.(jpe?g|png|gif|svg|ico)$/,
    use: 'file-loader'
});

// plugins
// =======================================
const plugins = [];

plugins.push(new UglifyJSPlugin({
    sourceMap: true
}))

// config
module.exports = () => ({
    bail: false, // changed to false
    entry: [indexPath],
    output: {
        path: buildPath,
        filename: 'bundle.js'
    },
    module: { loaders },
    plugins
});

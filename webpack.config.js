/**
 * Created by YikaJ on 15/6/16.
 */
'use strict';
var path = require('path');

module.exports = {
    entry: [
        "./src/entry.js"
    ],
    output: {
        path: path.join(__dirname, 'dest'),
        publicPath: 'dest/',
        filename: "bundle.js"
    },
    externals: {
        'react': 'React',
        'localDb': 'LocalDb'
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: "react-hot!jsx!babel", include: /src/},
            { test: /\.css$/, loader: "style!css"},
            { test: /\.scss$/, loader: "style!css!sass"},
            { test: /\.svg$/, loader: "url?limit=8192"}
        ]
    }
};
 const path = require('path');
 //entry -> output the final bundle file
 console.log(path.join(__dirname,"public"));

 module.exports = {
    entry: "./src/playground/Webpack-Import-Export-Practice/app.js",
    output:{
        path: path.join(__dirname,"public"),
        filename:'bundle.js'
    },
    module:{
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }]
    }
 };


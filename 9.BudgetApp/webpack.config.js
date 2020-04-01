 const path = require('path');
 //entry -> output the final bundle file
 console.log(path.join(__dirname,"public"));

 module.exports = {
    entry: "./src/playground/destructuring_Challenge.js",
    output:{
        path: path.join(__dirname,"public"),
        filename:'bundle.js'
    },
    module:{
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        },{
            test: /\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname,"public"),
        historyApiFallback: true
    }
 };


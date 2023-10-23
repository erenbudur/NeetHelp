const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
module.exports = {
  entry:{ 
    index:"./src/index.js",
    content:"./src/content.js",
    // background:"./src/background.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    clean:true,
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
     
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
     
    ],
  },
  devtool: 'inline-source-map',
  plugins:[
    new HtmlWebpackPlugin({
        
        filename: "index.html",
        inject: 'body',
        template: "./src/index.html",
        chunks:["index"]
    }),
    new CopyPlugin({
      patterns: [
        { from: "./src/manifest.json", to: "manifest.json" },
      ],
    }),
  ]
};

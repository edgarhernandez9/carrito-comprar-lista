const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const deps = require("./package.json").dependencies;
module.exports = () => {

    return {
        entry: './src/index.js',
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'dist'),
            publicPath: 'http://localhost:3001/'
        },


        resolve: {
            extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
          },
      
        devServer: {
            port: 3001,
            historyApiFallback: true,
        },
      
        module: {
            rules: [
                {
                type: "javascript/auto",
                test: /\.m?js/,
                resolve: {
                    fullySpecified: false,
                },
                },
                {
                use: ["style-loader", "css-loader", "postcss-loader"],
                test: /\.(css|s[ac]ss)$/i,
                },
                {
                use:  "babel-loader",
                test: /\.(ts|tsx|js|jsx)$/,
                exclude: /node_modules/,
                },
                {
                type: 'asset',
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                },
            ],
        },

        plugins: [
            new ModuleFederationPlugin({
                name: 'carrito_compras_views',
                filename: "remoteEntry.js",
                remotes: {
                    'components': 'carrito_compras@http://localhost:3000/remoteEntry.js',
                },
                exposes: {
                    './Home': './src/pages/Home/Home.jsx',
                    './useBuy': './src/hooks/useBuy.js',
                },
                shared: {
                    ...deps,
                    react: {
                      eager: true,
                    //   singleton: true,
                      requiredVersion: deps.react,
                    },
                    "react-dom": {
                    //   singleton: true,
                      requiredVersion: deps["react-dom"],
                    },
                },

            }),
            new HtmlWebPackPlugin({
              template: "./public/index.html",
            }),
        ],
    }

}
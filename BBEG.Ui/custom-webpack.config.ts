const CompressionPlugin = require(`compression-webpack-plugin`);
const zlib = require("zlib");

module.exports = {
    plugins: [
        new CompressionPlugin({
            filename: "[path][base].br",
            algorithm: "brotliCompress",
            test: /\.(js|css|html|svg|txt|eot|otf|ttf|gif)$/,
            compressionOptions: {
                params: {
                    [zlib.constants.BROTLI_PARAM_QUALITY]: 11,
                },
            },
            threshold: 10240,
            minRatio: 0.8,
            deleteOriginalAssets: false,
        })
    ]
};
const { createProxyMiddleware } = require('http-proxy-middleware');

function (app) {
    app.use(
        '/translate',
        createProxyMiddleware({
            target: 'http://localhost:5173',
            changeOrigin: true,
        })
    );
};

module.exports = app
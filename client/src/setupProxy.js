const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function(app) {
    app.use(
        "/api",
        createProxyMiddleware({
            target: "http://172.30.1.15:4040",
            changeOrigin: true
        })
    )
}
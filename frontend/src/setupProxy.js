const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/api1', {
      target: 'http://localhost:5001', // API endpoint 1
      changeOrigin: true,
      headers: {
        Connection: "keep-alive"
      }
    })
  );
  app.use(
    createProxyMiddleware('/api2', {
      target: 'http://localhost:5002', // API endpoint 2
      changeOrigin: true,
      headers: {
        Connection: "keep-alive"
      }
    })
  );
  app.use(
    createProxyMiddleware('/api3', {
      target: 'http://localhost:5003', // API endpoint 1
      changeOrigin: true,
      headers: {
        Connection: "keep-alive"
      }
    })
  );
  app.use(
    createProxyMiddleware('/api4', {
      target: 'http://localhost:5004', // API endpoint 2
      changeOrigin: true,
      headers: {
        Connection: "keep-alive"
      }
    })
  );
  app.use(
    createProxyMiddleware('/api5', {
      target: 'http://localhost:5005', // API endpoint 1
      changeOrigin: true,
      headers: {
        Connection: "keep-alive"
      }
    })
  );
  app.use(
    createProxyMiddleware('/api6', {
      target: 'http://localhost:5006', // API endpoint 2
      changeOrigin: true,
      headers: {
        Connection: "keep-alive"
      }
    })
  );
}
const http = require('http');
const httpProxy = require('http-proxy');
const url = require('url');

const proxy = httpProxy.createProxyServer({});
const PORT = 8080;

const server = http.createServer((req, res) => {
    const targetUrl = decodeURIComponent(req.url.substring(1)); // Get the URL from the path
    if (!targetUrl) {
        res.writeHead(400, { 'Content-Type': 'text/plain' });
        res.end('No URL specified');
        return;
    }

    // Proxy request to target URL
    proxy.web(req, res, { target: targetUrl }, (err) => {
        res.writeHead(502, { 'Content-Type': 'text/plain' });
        res.end('Proxy Error: ' + err.message);
    });
});

server.listen(PORT, () => {
    console.log(`Proxy server running at http://localhost:${PORT}`);
});

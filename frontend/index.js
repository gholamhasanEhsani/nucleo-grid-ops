const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 4000;

const server = http.createServer((req, res) => {
    console.log("Request:", req.url);

    if (req.url === "/api/plants") {
        // مثال fetch از FastAPI
        const https = require("http"); // چون FastAPI localhost:http
        https.get("http://127.0.0.1:8000/plants", (apiRes) => {
            let data = "";
            apiRes.on("data", chunk => data += chunk);
            apiRes.on("end", () => {
                res.writeHead(200, { "Content-Type": "application/json" });
                res.end(data);
            });
        }).on("error", (err) => {
            res.writeHead(500);
            res.end(JSON.stringify({ error: err.message }));
        });
    } else {
        // serve فایل‌های static
        let filePath = path.join(__dirname, "public", req.url === "/" ? "index.html" : req.url);
        fs.readFile(filePath, (err, content) => {
            if (err) {
                res.writeHead(404);
                res.end("Not Found");
            } else {
                let ext = path.extname(filePath).toLowerCase();
                let contentType = "text/html";
                if (ext === ".js") contentType = "text/javascript";
                else if (ext === ".css") contentType = "text/css";
                else if (ext === ".json") contentType = "application/json";
                res.writeHead(200, { "Content-Type": contentType });
                res.end(content);
            }
        });
    }
});

server.listen(PORT, "127.0.0.1", () => {
    console.log(`HTTP server running on http://localhost:${PORT}`);
});

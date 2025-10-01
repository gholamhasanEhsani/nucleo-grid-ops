const http = require("http");

const PORT = 4000; // هر پورت آزاد که مطمئن هستی

const server = http.createServer((req, res) => {
  res.end("OK");
});

server.on("error", (err) => {
  console.error("Error binding port:", err);
});

server.listen(PORT, '127.0.0.1', () => {
  console.log(`Port ${PORT} bound successfully`);
});

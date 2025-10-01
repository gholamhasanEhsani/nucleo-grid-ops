const express = require("express");
const path = require("path");
const http = require("http");

const app = express();
const PORT = 4000;

app.use(express.static(path.join(__dirname, "public")));

// مسیر API /api/plants
app.get("/api/plants", (req, res) => {
    // fetch از FastAPI backend
    http.get("http://127.0.0.1:8000/plants", (apiRes) => {
        let data = "";
        apiRes.on("data", chunk => data += chunk);
        apiRes.on("end", () => {
            res.status(200).json(JSON.parse(data));
        });
    }).on("error", (err) => {
        res.status(500).json({ error: err.message });
    });
});

app.get("/*spa", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// شروع سرور
app.listen(PORT, "127.0.0.1", () => {
    console.log(`Express server running on http://localhost:${PORT}`);
});

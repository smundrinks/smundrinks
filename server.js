// OPTIONAL BACKEND PLACEHOLDER
// GitHub Pages does not execute this server.
// If you later deploy a Node backend on Render/Railway/etc.,
// this is where API endpoints can live.

const express = require("express");
const app = express();
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({ ok: true, service: "SMUN DRINKS API" });
});

app.post("/api/inquiry", (req, res) => {
  // Connect this to a database/email service when you choose a backend host.
  res.status(201).json({ received: true, inquiry: req.body });
});

app.listen(process.env.PORT || 3000, () => {
  console.log("SMUN API running");
});

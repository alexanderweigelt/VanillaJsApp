const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3001;

// Dummy-Data
const meData = JSON.parse(
  fs.readFileSync(path.join(__dirname, "data/me.json")),
);
const youData = JSON.parse(
  fs.readFileSync(path.join(__dirname, "data/you.json")),
);

// Only allows requests from frontend server on port 3000
app.use(
  cors({
    origin: "http://localhost:3000",
  }),
);

// Endpoint: GET /api/me/:meId
app.get("/api/me/:meId", (req, res) => {
  const meId = parseInt(req.params.meId, 10);
  console.log("Backend:: MeApi is called with meId: ", meId);
  const me = meData.find((item) => item.id === meId);

  if (!me) {
    return res.status(404).json({ error: "Me not found" });
  }

  res.json(me);
});

// Endpoint: GET /api/you/:youId
app.get("/api/you/:youId", (req, res) => {
  const youId = parseInt(req.params.youId, 10);
  console.log("Backend:: YouApi is called with youId: ", youId);
  const you = youData.find((item) => item.id === youId);

  if (!you) {
    return res.status(404).json({ error: "You not found" });
  }

  res.json(you);
});

// Start the server
app.listen(PORT, () => {
  console.log(
    `Backend:: Server is up and running. Call http://localhost:${PORT}`,
  );
});

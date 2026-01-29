const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(`
    <h1>🚀 CI/CD Pipeline Update Successful</h1>
    <p>This version was deployed using:</p>
    <ul>
      <li>GitHub</li>
      <li>Jenkins CI/CD</li>
      <li>Docker</li>
      <li>Kubernetes Rolling Update</li>
    </ul>
    <p><b>Status:</b> ✅ Live & Running</p>
  `);
});

app.get("/health", (req, res) => {
  res.json({
    status: "UP",
    message: "Application is healthy",
    timestamp: new Date()
  });
});

app.listen(3000, () => {
  console.log("App running on port 3000");
});

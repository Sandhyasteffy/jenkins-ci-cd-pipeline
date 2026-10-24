const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Jenkins CI/CD Pipeline Application is Running!");
});

app.get("/health", (req, res) => {
  res.json({ status: "healthy" });
});

module.exports = app;

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Application running on port ${PORT}`);
  });
}

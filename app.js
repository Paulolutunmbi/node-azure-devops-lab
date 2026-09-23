const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Azure DevOps Node.js App</title>

      <style>
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        body {
          font-family: Arial, sans-serif;
          background: #f4f6f8;
          color: #2c3e50;
        }

        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 30px;
        }

        .container {
          max-width: 700px;
          background: white;
          padding: 60px 40px;
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }

        .badge {
          display: inline-block;
          background: #0078d4;
          color: white;
          padding: 10px 20px;
          border-radius: 30px;
          font-weight: bold;
          margin-bottom: 20px;
        }

        h1 {
          font-size: 42px;
          margin-bottom: 20px;
        }

        p {
          font-size: 18px;
          line-height: 1.7;
          margin-bottom: 20px;
        }
      </style>
    </head>

    <body>
      <div class="hero">
        <div class="container">
          <span class="badge">Azure DevOps CI/CD</span>

          <h1>My Node.js App is Live!</h1>

          <p>
            This Node.js application was automatically deployed
            to Azure App Service using Azure DevOps.
          </p>

          <p>
            🚀 Build → Test → Deploy → Run
          </p>

          <p>
            Node.js + Express + Azure App Service
          </p>
        </div>
      </div>
    </body>
    </html>
  `);
});

app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    message: "Node.js application is running",
  });
});

module.exports = app;
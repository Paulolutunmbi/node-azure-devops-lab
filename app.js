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
      <title>Paul Olutunmbi | Developer Profile</title>

      <style>
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        body {
          font-family: Arial, sans-serif;
          background: #f4f6f8;
          color: #1f2937;
        }

        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px 20px;
        }

        .container {
          width: 100%;
          max-width: 800px;
          background: white;
          padding: 55px 45px;
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          text-align: center;
        }

        .badge {
          display: inline-block;
          background: #0078d4;
          color: white;
          padding: 10px 20px;
          border-radius: 30px;
          font-weight: bold;
          margin-bottom: 25px;
        }

        h1 {
          font-size: 44px;
          margin-bottom: 12px;
          color: #111827;
        }

        .role {
          font-size: 21px;
          font-weight: bold;
          margin-bottom: 20px;
        }

        .profile {
          font-size: 17px;
          line-height: 1.7;
          margin-bottom: 30px;
          color: #4b5563;
        }

        .skills {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 10px;
          margin: 25px 0 35px;
        }

        .skill {
          background: #eef2f7;
          padding: 9px 14px;
          border-radius: 8px;
          font-size: 14px;
          font-weight: bold;
        }

        .contact {
          display: inline-block;
          background: #111827;
          color: white;
          text-decoration: none;
          padding: 13px 24px;
          border-radius: 8px;
          font-weight: bold;
          transition: 0.2s ease;
        }

        .contact:hover {
          background: #374151;
        }

        .deployment {
          margin-top: 35px;
          padding-top: 25px;
          border-top: 1px solid #e5e7eb;
          font-size: 14px;
          color: #6b7280;
        }
      </style>
    </head>

    <body>
      <div class="hero">
        <div class="container">

          <span class="badge">Azure DevOps CI/CD</span>

          <h1>Paul Olutunmbi</h1>

          <div class="role">
            Computer Science Student & Full-Stack Developer
          </div>

          <p class="profile">
            I am a Computer Science student and developer interested in
            building web applications and learning DevOps and cloud
            technologies. I work with modern JavaScript technologies and
            enjoy turning ideas into functional applications.
          </p>

          <div class="skills">
            <span class="skill">JavaScript</span>
            <span class="skill">React</span>
            <span class="skill">Node.js</span>
            <span class="skill">Express</span>
            <span class="skill">MongoDB</span>
            <span class="skill">Firebase</span>
            <span class="skill">Docker</span>
            <span class="skill">Terraform</span>
            <span class="skill">Azure</span>
          </div>

          <a
            class="contact"
            href="mailto:oluwatunmbipaul@gmail.com"
          >
            Contact Me
          </a>

          <div class="deployment">
            Deployed automatically with Azure DevOps CI/CD
            <br>
            Node.js + Express + Azure App Service
          </div>

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
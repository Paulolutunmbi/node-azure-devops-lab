# Node.js Azure DevOps CI/CD Lab

A Node.js and Express landing page deployed to Azure App Service using an automated Azure DevOps CI/CD pipeline.

## Overview

This project demonstrates how application code can be automatically tested, packaged, and deployed to Azure App Service whenever changes are pushed to the `main` branch.

The project was created as part of my DevOps training to understand the workflow between source control, CI/CD automation, and cloud application hosting.

## Tech Stack

* Node.js
* Express.js
* Jest
* Supertest
* Azure Repos
* Azure DevOps Pipelines
* Azure App Service
* Microsoft Azure
* Git

## CI/CD Workflow

```text
Developer changes code
        ↓
Git commit
        ↓
Push to Azure Repos
        ↓
Azure DevOps Pipeline automatically triggers
        ↓
Install dependencies
        ↓
Run automated tests
        ↓
Package application
        ↓
Deploy to Azure App Service
        ↓
Updated application goes live
```

## Pipeline

The Azure DevOps pipeline performs the following steps:

1. Installs Node.js 24
2. Installs dependencies using `npm ci`
3. Runs automated tests with Jest
4. Packages the application into a ZIP artifact
5. Publishes the build artifact
6. Deploys the application to Azure App Service

The pipeline is triggered automatically by pushes to the `main` branch.

## Application

The application contains:

* Developer profile landing page
* Skills section
* Contact button
* Health-check API endpoint

### Health Check

```text
GET /api/health
```

Example response:

```json
{
  "status": "ok",
  "message": "Node.js application is running"
}
```

## Testing

The project uses Jest and Supertest for automated endpoint testing.

Current tests verify:

* `GET /` returns HTTP 200
* `GET /api/health` returns HTTP 200
* The health endpoint returns the expected status

Run the tests locally with:

```bash
npm test
```

## Running Locally

Install dependencies:

```bash
npm install
```

Start the application:

```bash
npm start
```

The application runs on:

```text
http://localhost:3000
```

## Deployment

The application is hosted on Azure App Service and deployed through Azure DevOps Pipelines.

A push to the `main` branch automatically starts the pipeline.

## Project Structure

```text
node-azure-devops-lab/
├── app.js
├── server.js
├── package.json
├── package-lock.json
├── test/
│   └── app.test.js
├── .gitignore
└── azure-pipelines.yml
```

## What I Learned

This project helped me understand the difference between cloud hosting and CI/CD automation.

Azure App Service provides the environment where the application runs, while Azure DevOps handles the automated process of testing, packaging, and deploying application changes.

I also worked with:

* Azure App Service
* Azure Repos
* Azure DevOps Pipelines
* Workload Identity Federation
* Automated testing
* Build artifacts
* Git-based deployment triggers

## Author

**Paul Olutunmbi**

Computer Science Student | Full-Stack Developer | DevOps & Cloud Computing Learner

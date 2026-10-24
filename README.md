# Jenkins CI/CD Pipeline

## Overview
A Node.js application automated using Jenkins and Docker.

## Pipeline stages
1. Checkout source code from GitHub.
2. Install Node.js dependencies.
3. Run automated tests.
4. Build a Docker image.
5. Deploy the application as a Docker container.

## Endpoints
- `/` - Application home page
- `/health` - Health status

## Run locally
npm install
npm test
npm start

## Run with Docker
docker build -t jenkins-ci-cd-pipeline:latest .
docker run -d --name jenkins-ci-cd-app -p 3000:3000 jenkins-ci-cd-pipeline:latest

Open http://localhost:3000

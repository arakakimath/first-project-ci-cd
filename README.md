# First Project CI/CD

## About the project

This project main function is to successfully build a pipeline CI/CD from the GitHub push to a deploy with AWS AppRunner. The start template for this repository was a NestJS initial project of a simple API. 
Using .yaml extension for coding workflows to run at GitHub Actions, then using Dockerfile to build an image to post in AWS Elastic Container Registry and then deploy it with AWS AppRunner.

## Continuous Integration (CI):

Continuous Integration (CI) and Continuous Deployment (CD) are practices commonly used in modern software development to automate and streamline the process of building, testing, and deploying applications. CI is the practice of automatically integrating code changes from multiple contributors into a shared repository multiple times a day.
The goal is to detect issues early by running automated tests (unit tests, integration tests, etc.) on every change to ensure the codebase remains stable.
CI often involves automatic build processes (compiling code, running tests) that verify the quality of new commits, catch bugs earlier, and allow teams to work on features without the fear of breaking the application.
Popular CI tools: Jenkins, Travis CI, CircleCI, GitHub Actions, GitLab CI, etc.

## Continuous Deployment (CD):

Continuous Deployment is an extension of CI. Once the code passes automated testing in the CI pipeline, it is automatically deployed to production without manual intervention.
This practice ensures that new features, bug fixes, or updates are rapidly delivered to end users, reducing the time between development and production.
It requires a robust set of automated tests to ensure the application behaves correctly in production. A failed test would stop deployment to prevent potential issues.
Popular CD tools: Kubernetes, AWS CodeDeploy, GitLab CI/CD, Jenkins, etc.
The Key Differences:

Continuous Integration focuses on merging code frequently, testing it, and ensuring the codebase is stable.
Continuous Deployment goes a step further by automatically deploying the integrated code to production as soon as it's tested and validated.
Together, CI and CD make up the backbone of modern DevOps pipelines, helping teams deliver high-quality software more quickly, with reduced risk.


# CI/CD Pipeline for NestJS API with AWS AppRunner

This project demonstrates the implementation of a **CI/CD pipeline** for a NestJS-based API application. The pipeline automatically builds, tests, and deploys the application from GitHub to **AWS AppRunner** using a **Docker container**.

## Key Features:
- **Automated Workflow**: The project uses GitHub Actions to automate the process of building and deploying the NestJS API.
- **Docker Integration**: The application is containerized using Docker, allowing seamless deployment to cloud platforms.
- **AWS Elastic Container Registry (ECR)**: The Docker image is stored in AWS ECR for easy access and deployment.
- **AWS AppRunner**: The application is deployed to **AWS AppRunner**, ensuring scalability and managed services.

## Workflow Overview:

1. **Push to `infrastructure-layer` branch**: Whenever a push is made to the `infrastructure-layer` branch, the GitHub Actions pipeline is triggered.
2. **Build & Test**: The code is installed, and tests are executed using `npm`.
3. **Docker Image Creation**: The application is containerized using a custom `Dockerfile`, and the image is tagged with a unique commit SHA.
4. **Push to ECR**: The built Docker image is pushed to **AWS Elastic Container Registry (ECR)**.
5. **Deploy to AppRunner**: The image from ECR is deployed to **AWS AppRunner**, which automatically handles scaling and traffic routing.

## Setup Instructions:

### GitHub Secrets:
Make sure to configure the following secrets in your GitHub repository:
- `AWS_LOGIN_ROLE`: The role to assume for AWS access.
- `AWS_REGION`: Your AWS region (e.g., `us-east-1`).
- `AWS_APPRUNNER_ROLE_ARN`: The ARN of the AppRunner service role.

### AWS Services:
- **AWS ECR**: Create a private ECR repository to store your Docker image.
- **AWS AppRunner**: Set up an AppRunner service that will automatically deploy the containerized application.

### Dockerfile:
This project includes a custom `Dockerfile` for building the NestJS application into a container. The Docker image is tagged and pushed to ECR for deployment.

---

## Getting Started:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/repository-name.git
   ```
2. Set up AWS credentials and configure the necessary IAM roles for AppRunner and ECR.
3. Push code to the infrastructure-layer branch to trigger the CI/CD pipeline.

## Notes:
- The CI/CD pipeline is triggered automatically on pushes to the `infrastructure-layer` branch.
- Ensure that all necessary AWS roles and permissions are set up before deploying, including:
  - IAM roles for AWS ECR and AWS AppRunner.
  - AWS credentials configured in GitHub Secrets (e.g., `AWS_LOGIN_ROLE`, `AWS_REGION`, `AWS_APPRUNNER_ROLE_ARN`).
- The pipeline relies on a custom Dockerfile to containerize the NestJS application, which is then pushed to AWS ECR and deployed to AppRunner.

For more details, refer to the GitHub Actions workflow file located at `.github/workflows/ci.yml`.


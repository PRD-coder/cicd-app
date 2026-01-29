# cicd-app
End-to-End CI/CD Pipeline for a Containerized Web App


This project demonstrates a complete DevOps CI/CD pipeline where application code changes are automatically built, containerized, pushed to Docker Hub, and deployed to Kubernetes using Jenkins.

-> Project Overview :
    
 The goal of this project is to implement an end-to-end Continuous Integration and Continuous Deployment (CI/CD) pipeline using industry-standard DevOps tools.

Code Commit → Jenkins → Docker Build → Docker Hub → Kubernetes Deployment

-> Tech Stack Used :
 
   Source Control: GitHub

   CI/CD Tool: Jenkins

   Containerization: Docker

   Container Orchestration: Kubernetes (Minikube)

   Cloud Platform: AWS EC2

   Backend: Node.js (Express)

-> Project Structure :   

cicd-app/
├── app.js                # Node.js application
├── package.json          # App dependencies
├── Dockerfile            # Docker image definition
├── Jenkinsfile           # CI/CD pipeline definition
├── k8s/
│   ├── deployment.yaml   # Kubernetes Deployment
│   └── service.yaml      # Kubernetes Service
└── README.md

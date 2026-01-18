pipeline {
  agent any

  environment {
    DOCKER_IMAGE = "149209/cicd-app"
  }

  stages {
    stage("Checkout") {
      steps {
        git branch: 'main',
            url: 'https://github.com/PRD-coder/cicd-app.git'
      }
    }

    stage("Build Docker Image") {
      steps {
        sh "docker build -t $DOCKER_IMAGE ."
      }
    }

    stage("Login to DockerHub") {
      steps {
        withCredentials([usernamePassword(
          credentialsId: 'dockerhub-creds',
          usernameVariable: 'USER',
          passwordVariable: 'PASS'
        )]) {
          sh "docker login -u $USER -p $PASS"
        }
      }
    }

    stage("Push Image") {
      steps {
        sh "docker push $DOCKER_IMAGE"
      }
    }
  }
}

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
          credentialsId: '149209',
          usernameVariable: 'USER',
          passwordVariable: 'PASS'
        )]) {
          echo $PASS | docker login -u $USER --password-stdin
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

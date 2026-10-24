pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo 'Source code checked out from GitHub'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Test') {
            steps {
                bat 'npm test'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t jenkins-ci-cd-pipeline:latest .'
            }
        }

        stage('Deploy') {
            steps {
                bat 'docker rm -f jenkins-ci-cd-app || exit /b 0'
                bat 'docker run -d --name jenkins-ci-cd-app -p 3000:3000 --restart unless-stopped jenkins-ci-cd-pipeline:latest'
            }
        }
    }

    post {
        success {
            echo 'Build, tests, Docker image creation, and deployment completed!'
        }
        failure {
            echo 'Pipeline failed. Check the stage logs.'
        }
    }
}

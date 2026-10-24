pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/Sandhyasteffy/jenkins-ci-cd-pipeline.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t jenkins-ci-cd-pipeline:latest .'
            }
        }

        stage('Deploy') {
            steps {
                sh 'docker rm -f jenkins-ci-cd-app || true'
                sh 'docker run -d --name jenkins-ci-cd-app -p 3000:3000 --restart unless-stopped jenkins-ci-cd-pipeline:latest'
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

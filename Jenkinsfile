pipeline {
    agent any

    environment {
        DOCKER_ID = credentials('DOCKER_ID')
        DOCKER_PASSWORD = credentials('dockerhub')
    }

    stages {
        stage('Init') {
            steps {
                echo 'Initializing..'
                echo "Running ${env.BUILD_ID} on ${env.JENKINS_URL}"
                sh 'echo $DOCKER_PASSWORD | docker login -u $DOCKER_ID --password-stdin'
            }
        }
        stage('Stage 1') {
            steps {
                echo 'Building..'
                sh 'docker build -t wizefe .'
            }
        }
        stage('Stage 2') {
            steps {
                echo 'Publishing..'
                echo 'Publishing image to DockerHub..'
                sh 'docker push $DOCKER_ID/wizefe:latest'
            }
        }
        stage('Cleanup') {
            steps {
                echo 'Cleaning..'
                sh 'docker images -q | xargs --no-run-if-empty docker rmi'
            }
        }
    }
}

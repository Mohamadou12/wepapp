
pipeline {
    agent any
    
    stages {
        stage('Clone') {
            steps {
                echo '🔄 Clonage du repo...'
                git branch: 'dev', url: 'https://github.com/Mohamadou12/wepapp.git'
            }
        }
        
        stage('Build') {
            steps {
                echo '🔨 Build de l\'image Docker...'
                sh 'docker build -t portfolio:${BUILD_NUMBER} .'
            }
        }
        
        stage('Deploy') {
            steps {
                echo '🚀 Déploiement du conteneur...'
                sh '''
                docker stop portfolio-prod || true
                docker rm portfolio-prod || true
                docker run -d -p 8082:80 --name portfolio-prod portfolio:${BUILD_NUMBER}
                '''
                echo '✅ Déployé sur http://localhost:8082'
            }
        }
    }
    
    post {
        success {
            slackSend(channel: '#mohamadou', color: 'good', message: "✅ Build ${BUILD_NUMBER} réussi ! Portfolio live → http://localhost:8082")
        }
        failure {
            slackSend(channel: '#mohamadou', color: 'danger', message: "❌ Build ${BUILD_NUMBER} échoué ! Logs → ${BUILD_URL}")
        }
    }
}
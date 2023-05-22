def URL_WEBHOOK = 'https://tanaakk.webhook.office.com/webhookb2/436ffc98-e81e-4b37-b140-89641649800c@a2fe65c9-824a-4e10-91da-92654b503814/JenkinsCI/d5565eaaa0084c4e813ce54087fd5bf6/08b9f1a7-d501-47eb-849c-f55523f1a2a9'

currentVersion = "v1.0"
 
def getEnvCode(def _git_branch){
    if (_git_branch == "develop2"){
        env_code = "dev2"
    }
    else{
        env_code = "feature"
    }
    return env_code
}
 
pipeline {
    agent { 
        label 'Jenkins-Agent'
    }	
    options {
        office365ConnectorWebhooks([[
            notifyFailure: true,
            notifyAborted: true,
            notifyRepeatedFailure: true,
            url: "${URL_WEBHOOK}"
        ]])
    }
    environment {
        SERVICE_NAME = 'frontend-web-admin'
    }
    parameters {
        string(name: 'SLEEP_TIME_IN_SECONDS', defaultValue: '10', description: 'The waiting time to Sonar server perform analysis')
        string(name: 'BUILD_MANUAL', defaultValue: 'Name-Service', description: 'Enter the Name Service')
    }
    stages {
        stage('Checkout Source Code') {
            anyOf{
                    changeset "*"
                    expression { params.BUILD_MANUAL == 'frontend-web-admin' }
                    } 
            steps {
                /* Let's make sure we have the repository cloned to our workspace */
             
                script {
                    env.ENV_CODE = getEnvCode(env.BRANCH_NAME)
                    echo "${ENV_CODE}"
                    checkout([
                        $class: 'GitSCM',
                        branches: scm.branches,
                        doGenerateSubmoduleConfigurations: scm.doGenerateSubmoduleConfigurations,
                        extensions: scm.extensions + [[$class: 'CloneOption', noTags: false, reference: '', shallow: false]],
                        userRemoteConfigs: scm.userRemoteConfigs
                    ])
                    currentVersion = sh(returnStdout: true, script: "git tag -l | tail -1").trim()
                    echo "${currentVersion}"
                }
            }
        }

        stage('Update Spring Profiles'){
            anyOf{
                    changeset "*"
                    expression { params.BUILD_MANUAL == 'frontend-web-admin' }
                    } 
            steps {
                configFileProvider([
                    configFile(fileId: "frontend-admin-${ENV_CODE}-profile",
                    targetLocation: "./configs/app.ts")
                ]) {
                    sh "cat ./configs/app.ts"
                }
                echo "Update Spring Profiles Done!!!!"
            }
        }

        stage('Build and push packages'){
            anyOf{
                    changeset "*"
                    expression { params.BUILD_MANUAL == 'frontend-web-admin' }
                    }
            steps {
                script {
                    def now = new Date()
                    def dateTag = now.format("yyyy_MM_dd_HHmmss")
                    env.IMAGE_TAG = "${currentVersion}_${dateTag}"
                    if (env.BRANCH_NAME == 'develop2') {
                        sh "docker build --force-rm -t icucoregistrydevjapaneast.azurecr.io/frontend-web-admin:${env.IMAGE_TAG} -f Dockerfile ."
                    } else if (env.BRANCH_NAME == 'staging') {
                        sh "docker build --force-rm -t icucoregistrydevjapaneast.azurecr.io/frontend-web-admin:${env.IMAGE_TAG} -f Dockerfile ."
                    } else if (env.BRANCH_NAME == 'main') {
                        sh "docker build --force-rm -t icucoregistrydevjapaneast.azurecr.io/frontend-web-admin:${env.IMAGE_TAG} -f Dockerfile ."
                    } else {
                        echo 'Branch invalid'
                    }
                    sh "docker push  icucoregistrydevjapaneast.azurecr.io/frontend-web-admin:${env.IMAGE_TAG}"
	            sh "docker rmi icucoregistrydevjapaneast.azurecr.io/frontend-web-admin:${env.IMAGE_TAG}"
                    sh "docker image prune --filter label=stage=build -f"
                }
                echo "Image tag:"
                echo "${env.IMAGE_TAG}"
                
            }
        }
        
 
        stage('Deploy') { 
            anyOf{
                    changeset "*"
                    expression { params.BUILD_MANUAL == 'frontend-web-admin' }
                    }
            environment {
                GIT_PROTOCOL = 'https'
                GIT_CONFIG_URI = "dev.azure.com/devops-icuco/04_icuco-book/_git/icuco-chart"
                GIT_CREDS = "tran.van.cong"
 
            }
            steps {
                configFileProvider([configFile(fileId: 'patchTagImages', targetLocation: '/tmp/patchTagImages.sh')]) {
                    withCredentials([usernamePassword(credentialsId: GIT_CREDS, passwordVariable: 'GIT_PASSWORD', usernameVariable: 'GIT_USERNAME')]){
                        sh "chmod +x /tmp/patchTagImages.sh"
                        sh "/tmp/patchTagImages.sh"
                    }
                }
            }
        }

        stage('Notification') {
            anyOf{
                    changeset "*"
                    expression { params.BUILD_MANUAL == 'frontend-web-admin' }
                    }
            steps {
                script {
                    office365ConnectorSend webhookUrl: "${URL_WEBHOOK}",
                        message: 'Application has been deployed',
                        status: 'Success',
                        color: '#00FF00'
                }
            }
        }
    }
}



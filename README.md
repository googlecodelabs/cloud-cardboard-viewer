# cardboard-viewer

## Run locally

1. `git clone https://github.com/googlecodelabs/cloud-cardboard-viewer.git`
1. `cd cardboard-viewer`
1. `npm install`
1. `npm start`

View the app at http://localhost:8080.

## Deploy to Google Cloud Platform

### Prepare a project

1. Create a [Google Account](https://accounts.google.com/SignUpWithoutGmail?service=cloudconsole&continue=https%3A%2F%2Fconsole.developers.google.com%2F&ltmpl=api) if you don't have one
1. Sign up for the [free trial](https://console.cloud.google.com/freetrial)
1. Create a project in the Google Cloud Platform Console.
  1. Open the [Cloud Platform Console](https://console.cloud.google.com/).
  1. In the dropdown menu at the top, select __Create a project__.
  1. Give your project a name
  1. Make note of the projectId, which might be different from the project name. The projectId is used in commands and configurations.
1. [Enable billing](https://console.cloud.google.com/project/_/settings) for your project

### Deploy your local app

1. `cardboard-viewer`
1. `gcloud preview app deploy`

First deployment may take awhile as your load balancer needs to be created.

### Deply from image

1. `cd cardboard-viewer`
1. `gcloud preview app deploy --image-url gcr.io/cardbard-viewer`

# License

Apache Version 2.0

See [LICENSE](LICENSE).

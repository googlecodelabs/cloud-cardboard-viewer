# cloud-cardboard-viewer

## Prepare a project

1. Create a [Google Account](https://accounts.google.com/SignUpWithoutGmail?service=cloudconsole&continue=https%3A%2F%2Fconsole.developers.google.com%2F&ltmpl=api) if you don't have one
1. Sign up for the [free trial](https://console.cloud.google.com/freetrial)
1. Create a project in the Google Cloud Platform Console.
  1. Open the [Cloud Platform Console](https://console.cloud.google.com/).
  1. In the dropdown menu at the top, select __Create a project__.
  1. Give your project a name
  1. Make note of the projectId, which might be different from the project name. The projectId is used in commands and configurations.
1. [Enable billing](https://console.cloud.google.com/billing) for your project
1. Enable the [Stackdriver Trace API](https://console.developers.google.com/apis/api/cloudtrace.googleapis.com/overview).
1. Enable the [YouTube Data API c3](https://console.developers.google.com/apis/api/youtube/overview).
1. Create an API Key.

## Run locally

1. `git clone https://github.com/googlecodelabs/cloud-cardboard-viewer.git`
1. `cd cloud-cardboard-viewer`
1. `npm install`
1. `API_KEY=<your-api-key> GCLOUD_PROJECT=<your-project-id> npm start`

View the app at http://localhost:8080.

## Deploy to Google Cloud Platform

### Deploy your local app

1. Set the `GCLOUD_PROJECT` and `API_KEY` environment variables in the `app.yaml` file.
1. Run `gcloud app deploy`.

First deployment may take a while as your load balancer needs to be created.

# License

Apache Version 2.0

See [LICENSE](LICENSE).

*This is not an official Google product*

# cloud-cardboard-viewer

## Prepare a project

1. Create a [Google Account](https://accounts.google.com/SignUpWithoutGmail?service=cloudconsole&continue=https%3A%2F%2Fconsole.developers.google.com%2F&ltmpl=api) if you don't have one
1. Sign up for the [free trial](https://console.cloud.google.com/freetrial)
1. Create a project in the Google Cloud Platform Console.
  1. Open the [Cloud Platform Console](https://console.cloud.google.com/).
  1. In the dropdown menu at the top, select __Create a project__.
  1. Give your project a name
1. [Enable billing](https://console.cloud.google.com/billing) for your project
1. Enable the [YouTube Data API c3](https://console.developers.google.com/apis/api/youtube/overview).
1. Create an API key.
1. Install the [Google Cloud SDK](https://cloud.google.com/sdk/).

## Run locally

1. Clone the project:

        git clone https://github.com/googlecodelabs/cloud-cardboard-viewer.git

1. Change directory into the project folder:

        cd cloud-cardboard-viewer

1. Install dependencies:

        npm install

1. Start the server:

        export API_KEY=YOUR_API_KEY
        npm start

    or

        API_KEY=YOUR_API_KEY npm start

    replacing `YOUR_API_KEY` with your API key.

1. View the app at [http://localhost:8080](http://localhost:8080).

## Deploy to Google Cloud Platform

### Deploy your local app

1. Set `API_KEY` environment variables in the `app.yaml` file.
1. Run `gcloud app deploy`.

# License

Apache Version 2.0

See [LICENSE](LICENSE).

*This is not an official Google product*

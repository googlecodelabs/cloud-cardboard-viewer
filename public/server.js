if (process.env.NODE_ENV === "production") {
  require("@google/cloud-trace").start();
}

if (process.env.GCLOUD_PROJECT) {
  require("@google/cloud-debug").start();
}

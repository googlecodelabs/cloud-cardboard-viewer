if (process.env.NODE_ENV === "production") {
  require("@google/cloud-trace").start();
}

if (process.env.GCLOUD_PROJECT) {
  require("@google/cloud-debug").start();
}
git config --global user.email "wne@iambite.com"
git config --global user.name "iambite"
git config credential.helper gcloud.sh

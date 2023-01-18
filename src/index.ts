import { S3 } from "aws-sdk";

const s3 = new S3({
  region: "us-east-1",
  endpoint: "https://lll",
  credentials: {
    accessKeyId: "dff",
    secretAccessKey: "ggh",
  },
});

s3.listBuckets((err, data) => {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", data.Buckets);
  }
});

const base64File = "data:image/jpeg;base64,";

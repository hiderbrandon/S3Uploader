const AWS = require('aws-sdk');
const s3 = new AWS.S3();
 
const uploadFile = (filename, data) => {
  return s3.putObject({ Bucket: BUCKET, Key: filename, ACL: 'public-read', Body: data }).promise();
}

module.exports = uploadFile;

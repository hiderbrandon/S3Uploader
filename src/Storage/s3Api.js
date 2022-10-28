const AWS = require('aws-sdk');
const s3 = new AWS.S3();
 
const uploadFile = async (filename, data , bucket ) => {
  return s3.putObject({ bucket: bucket, Key: filename, ACL: 'public-read', Body: data });
}

module.exports = uploadFile;

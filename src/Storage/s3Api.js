const AWS = require('aws-sdk');
const BUCKET = process.env.BUCKET;
const s3 = new AWS.S3();
 
const s3Api = async (filename, data) => {
  try {
    
    await s3.putObject({ Bucket: BUCKET, Key: filename, ACL: 'public-read', Body: data }).promise();
 
    return {
      statusCode: 200,
      body: JSON.stringify({ link: `https://${BUCKET}.s3.amazonaws.com/${filename}` })
    }
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: err.stack })
    }
  }
}

module.export= s3Api;

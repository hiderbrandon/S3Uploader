const AWS = require('aws-sdk');
const BUCKET = process.env.BUCKET;
const s3 = new AWS.S3();
 
const uploadFile = async (filename, data) => {
  try {
    
    await s3.putObject({ Bucket: BUCKET, Key: filename, ACL: 'public-read', Body: data }).promise();
    myLink = {
      statusCode: 200,
      body: JSON.stringify({ link: `https://${BUCKET}.s3.amazonaws.com/${filename}` })
    };
    console.log(`\n============uploadFile==========\n${JSON.stringify(myLink)}\n===========================\n`);

    return myLink;
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: err.stack })
    }
  }
}

module.exports = uploadFile;

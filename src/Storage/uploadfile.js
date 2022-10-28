const uploadFile = require(`./s3Api`);
const parseMultipart = require('parse-multipart');

const uploadFileService = async (event)  =>{
    try {
        const { filename, data } = extractFile(event);
        let myLink = uploadFile(filename ,data);
        console.log(`\n============uploadFile==========\n${JSON.stringify(myLink)}\n===========================\n`);
        return myLink;

    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: err.stack })
        }
    }

}

const extractFile = (event) => {
    const boundary = parseMultipart.getBoundary(event.headers['content-type']);
    const parts = parseMultipart.Parse(Buffer.from(event.body, 'base64'), boundary);
    const [{ filename, data }] = parts;
   
    return {
      filename,
      data
    }
}

module.exports = uploadFileService;

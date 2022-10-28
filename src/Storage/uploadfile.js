const uploadFile = require(`./s3Api`);
const parseMultipart = require('parse-multipart');

const uploadFileService = async (event)  =>{
    try {
        const { filename, data } = extractFile(event);
        return uploadFile(filename ,data);

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

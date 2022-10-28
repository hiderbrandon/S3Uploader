const {s3Api} = require(`./s3Api`);
const parseMultipart = require('parse-multipart');

const uploadFile = async (event)  =>{
    try {
        const { filename, data } = extractFile(event);
        return s3Api(filename ,data);

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

module.export= uploadFile;

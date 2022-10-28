const uploadFileService = require(`./src/Storage/uploadfileService`);
 
module.exports.handle = async (event) => {
    return uploadFileService(event);
}
const uploadFileService = require(`./src/Storage/uploadfile`);
 
module.exports.handle = async (event) => {
    return uploadFileService(event);
}
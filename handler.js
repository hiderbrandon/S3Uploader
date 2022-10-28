const uploadFileService = require(`./src/Storage/uploadfile`);
 
module.exports.handle = async (event) => {
    uploadFileService(event);
}
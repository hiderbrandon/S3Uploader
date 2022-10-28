const {uploadFile} = require('./src/Storage/uploadfile');
 
module.exports.handle = async (event) => {
    uploadFile(event);
}
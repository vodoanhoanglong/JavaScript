// Viết hàm lấy extension của một file
// Example
// getExtensionFilename("abc.mp3") // "mp3"

function getExtensionFilename(filename) {
    // viết code ở đây.
    var arrFileName = filename.split('.');
    return arrFileName[arrFileName.length-1];
  }
  
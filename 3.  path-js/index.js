const path = require('path');
// console.log(path);
console.log('filename', __filename);
console.log('\ndirname:', path.dirname(__filename));
console.log('\nbasename:', path.basename(__filename));
console.log('\nextension:', path.extname(__filename));

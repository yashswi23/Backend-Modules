import path from 'path';
const fullPath = '/users/yashswi/project/file.js';
console.log(path.basename(fullPath)); // file.js
console.log(path.dirname(fullPath));  // /users/yashswi/project
console.log(path.extname(fullPath));  // .js

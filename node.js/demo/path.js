// работа с путями
const path = require('path');

console.log('file name = ' + path.basename(__filename))

console.log('directory name = ' + path.dirname(__filename))

console.log('extention name = ' + path.extname(__filename))

console.log('object of file name = ', path.parse(__filename))

console.log('object request  = ', path.parse(__filename).name)

console.log('join method  = ', path.join(__filename, 'server', 'ass.ass'))

